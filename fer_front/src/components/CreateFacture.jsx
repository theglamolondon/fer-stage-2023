import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const writtenNumber = require('written-number');

function CreateFacture() {
  const [products, setProducts] = useState([])

  const [subTotal, setSubTotal] = useState(0)

  const nomCl = useRef(null)
  const dateVal = useRef(null)

  const addProduct = () => {
    setProducts(
      [...products, {
        reference: '',
        nom: '',
        qte: 0,
        prixUnitaire: 0,
        total: 0
      }])
  }

  const deleteItem = (index) => {
    setProducts((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
    })
}

useEffect(() => {
  let sub = 0
  products.map((product) => {
      sub += product.total
  })

  setSubTotal(prevValue=>{
      if (isNaN(sub)) {
          return prevValue;
      } else {
          return sub;
      }
  })
}, [products])

  const [dbProducts, setdbProducts] = useState([])

  const ondbProductChange = (e,index) => {
    const selectedIndex = e.currentTarget.options.selectedIndex;
    const selectedValue = e.currentTarget.options[selectedIndex].value
    const productSelected = dbProducts.find(p => p.nom === selectedValue)
    let updatedArray = [...products]
    productSelected.prixUnitaire = 0
    productSelected.total = 0
    updatedArray[index] = productSelected
    setProducts(updatedArray)
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/listProducts").then((response) => {
      setdbProducts(response.data.products)
    })
  }, [])

  const handleInputChange = (e, index) => {
    const { name, value } = e.currentTarget;

    setProducts(prevProducts => {
        const updatedProducts = [...prevProducts];
        const product = updatedProducts[index];

        // if (name === "qte" || name === "prixUnitaire") {
            if(!isNaN(parseFloat(value))){
                product[name] = parseFloat(value);
            }
        // }

        product.total = parseFloat((product.qte * product.prixUnitaire).toFixed(2));           
       

        return updatedProducts;
    });
    
};

  const sendInvoiceData = () =>{
    const dataInvoice = {
      nom:nomCl.current.value,
      validite:dateVal.current.value,
      tva: ((18*subTotal)/100).toFixed(2),
      mHT:subTotal,
      montLet:writtenNumber( ((18*subTotal)/100)+subTotal, {lang: 'fr'}),
      mTTC:(((18*subTotal)/100)+subTotal).toFixed(2)
    }

    axios.post("http://127.0.0.1:8000/api/addFacture",dataInvoice).then((response) => {
      

      products.forEach(product => {
        product.idFacture = response.data.facture.id
        axios.post("http://127.0.0.1:8000/api/addProduitFacture",product).then((response2) => {
          console.log(response2)
          console.log(product)
        })
      })
      
    })
  }


  let content = products.map((product, index) => {
    return (<tr id={(index + 1).toString()} key={index} className="product">
      <th scope="row" className="product-id">{index + 1}</th>
      <td className="text-start">
        <div className="mb-2">
          <input type="text" name="productName" readOnly value={product.reference} className="form-control bg-light border-0" id={"productName-" + (index + 1).toString()} placeholder="Product reference" required />
          <select className="form-select" aria-label="Default select example" onChange={(e)=>ondbProductChange(e,index)} >
      
            {
              dbProducts.length > 0 && dbProducts.map((dbProduct,index2) =>{
                return (<option key={index2} value={dbProduct.nom}>{dbProduct.nom}</option>)
              })
            }
          </select>
        </div>
        {/* <input name="productDetails" value={product.productDetails} className="form-control bg-light border-0" id={"productDetails-" + (index + 1).toString()} placeholder="Product name" /> */}
      </td>
      <td>
        <input type="number" onInput={(e) => handleInputChange(e, index)} value={product.prixUnitaire} name="prixUnitaire" className="form-control product-price bg-light border-0" id={"productRate-" + (index + 1).toString()} min={0} step="0.01" placeholder="0.00" required />
      </td>
      <td>
        <div className="input-step">

          <input value={product.qte} onInput={(e) => handleInputChange(e, index)} name="qte" type="number" className="form-control product-price bg-light border-0" id={"product-qty-" + (index + 1).toString()} min={0} required />

        </div>
      </td>
      <td className="text-end">
        <div>
          <input name="total" type="text" value={product.total} className="form-control bg-light border-0 product-line-price" id={"productPrice-" + (index + 1).toString()} placeholder="$0.00" readOnly />
        </div>
      </td>
      <td className="product-removal">
        <button type="button" className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
      </td>
    </tr>);
  });

  return (
    <>
      <Link to="/" className="btn btn-primary mt-5 ms-5">Retour</Link>

      <div className="container mt-5 border border-primary p-5 rounded col-md-7 d-flex justify-content-center">

        <form>
          <div className="mb-3 col-md-12 d-flex flex-row">
            <input type="text" ref={nomCl} className="form-control me-5" id="nom" placeholder="Nom du client" aria-describedby="emailHelp" />

            <input type="text" ref={dateVal} className="form-control" id="val" placeholder="Entrez la validité de la facture" style={{ width: 500 }} />
          </div>
          <div className="table-responsive">
            <table className="invoice-table table table-borderless table-nowrap mb-0">
              <thead className="align-middle">
                <tr className="table-active">
                  <th scope="col" style={{ "width": "50px" }}>#</th>
                  <th scope="col">
                    Produits
                  </th>
                  <th scope="col" style={{ "width": "120px" }}>
                    <div className="d-flex currency-select input-light align-items-center">
                      Prix Unitaire
                    </div>
                  </th>
                  <th scope="col" style={{ "width": "120px" }}>Quantité</th>
                  <th scope="col" className="text-end" style={{ "width": "150px" }}>Total</th>
                  <th scope="col" className="text-end" style={{ "width": "105px" }}></th>
                </tr>
              </thead>
              <tbody id="newlink">

                {content}

              </tbody>
              <tbody>
                <tr id="newForm" style={{ "display": "none" }}><td className="d-none" colSpan={5}><p>Add New Form</p></td></tr>
                <tr>
                  <td colSpan={5}>
                    <button id="add-item" type="button" className="btn btn-primary" onClick={() => addProduct()}><i className="ri-add-fill me-1 align-bottom"></i>Add</button>
                  </td>
                </tr>
                <tr className="border-top border-top-dashed mt-2">
                  <td colSpan={3}></td>
                  <td colSpan={2} className="p-0">
                    <table className="table table-borderless table-sm table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Montant HT</th>
                          <td style={{ "width": "150px" }}>
                            <input type="text" className="form-control bg-light border-0" value={subTotal} id="cart-subtotal" placeholder="0.00" readOnly />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">TVA (18%)</th>
                          <td>
                            <input type="text" value={(18*subTotal)/100} className="form-control bg-light border-0" id="cart-tax" placeholder="0.00" readOnly />
                          </td>
                        </tr>
                        
                        {/* <tr>
                                                                <th scope="row">Shipping Charge</th>
                                                                <td>
                                                                    <input type="text" className="form-control bg-light border-0" id="cart-shipping" placeholder="$0.00" readOnly />
                                                                </td>
                                                            </tr> */}
                        <tr className="border-top border-top-dashed">
                          <th scope="row">Montant TTC</th>
                          <td>
                            <input type="text" value={(((18*subTotal)/100)+subTotal).toFixed(2)} className="form-control bg-light border-0" id="cart-total" placeholder="$0.00" readOnly={true} />
                          </td>
                        </tr>
                        <tr className="border-top border-top-dashed">
                          <th scope="row">Montant TTC</th>
                          <td>
                            {/* <input type="text" value={  } className="form-control bg-light border-0" id="cart-total" placeholder="$0.00" readOnly={true} /> */}
                            {writtenNumber( ((18*subTotal)/100)+subTotal, {lang: 'fr'})}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <button type="button" className="btn btn-primary" onClick={sendInvoiceData}>Envoyer</button>
        </form>
      </div>
    </>
  )
}

export default CreateFacture
