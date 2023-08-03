import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

function ListProducts() {

  const [factures, setFactures] = useState([])
  const [onLoad, setOnLoad] = useState(false)

  useEffect(() => {
    setOnLoad(true)
    axios.get("http://127.0.0.1:8000/api/listProducts").then((response)=>{
      console.log(response.data.products)
      setFactures(response.data.products)
      setOnLoad(false)
    })
  }, [])


  return (
    onLoad ? <div className="container d-flex justify-content-center mt-5">
      Chargement en cours...
    </div> :<>
    <div class="container btn-group mt-5 d-flex justify-content-center col-md-3" role="group" aria-label="Basic example">
      <Link to="/" class="btn btn-secondary">Retour à l'accueil</Link>
      <Link to="/create_product" class="btn btn-primary">Ajouter un produit</Link>
    </div>
    <div className="container d-flex justify-content-center mt-5">
    
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Reference</th>
          <th scope="col">Produit</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody>
        {
          factures.map(element=>{
            return (<tr>
              <th scope="row">{element.id}</th>
              <td>{element.reference}</td>
              <td>{element.nom}</td>
              <td>{element.qte}</td>
            </tr>)
          })
        }
      </tbody>
    </table>
    </div> 
    </>
  )
}

export default ListProducts
