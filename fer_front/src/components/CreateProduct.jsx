import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function CreateProduct() {

  const ref = useRef(null)
  const nom = useRef(null)
  const qte = useRef(null)

  const sendData = () =>{
    if(parseInt(qte.current.value) < 0 || qte.current.value === "0"){
      Swal.fire({
        icon: 'error',
        title: 'Oups...',
        text: "la quantité du stock doit etre superieure a 1"
      })
    }else{
      const data = {
        reference: ref.current.value,
        nom: nom.current.value,
        qte: qte.current.value
      }
      axios.post("http://127.0.0.1:8000/api/addProduct",data).then(response =>{
        if(response.data.code === 200){
          Swal.fire({
            icon: 'success',
            title: 'Super',
            text: response.data.message
          })
        }
      })
    }
    
  }
  

  return (
   <>
    <Link to="/list_product" className="btn btn-primary mt-5 ms-5">Retour</Link>
    
   <div className="container mt-5 border border-primary p-5 rounded col-md-6 d-flex justify-content-center">
    
     <form>
      <div className="mb-3 col-md-12">
        <label htmlFor="ref" className="form-label">Reference</label>
        <input type="text" className="form-control" id="ref" aria-describedby="emailHelp" ref={ref}/>
        <div id="emailHelp" className="form-text">Entrez le nom de la reference</div>
      </div>
      <div className="mb-3 col-md-12">
        <label htmlFor="nom" className="form-label">Nom</label>
        <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" ref={nom}/>
        <div id="emailHelp" className="form-text">Entrez le nom du produit</div>
      </div>
      <div className="mb-3 col-md-12">
        <label htmlFor="qte" className="form-label">Quantité</label>
        <input type="number" min="0" className="form-control" id="qte" aria-describedby="emailHelp" ref={qte}/>
        <div id="emailHelp" className="form-text">Entrez le stock</div>
      </div>
      <button type="button" className="btn btn-primary" onClick={sendData}>Envoyer</button>
    </form>
   </div>
   </>
  )
}

export default CreateProduct
