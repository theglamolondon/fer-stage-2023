import React,{ useState,useEffect } from 'react'
import axios from 'axios'


function ListFactures() {

  const [factures, setFactures] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/listFactures").then((response)=>{
      setFactures(response.data.factures)
    })
  }, [])
  
  
  return (
    <div className="container mt-5">
      <ul class="list-group">
      {
        factures.map((facture,index)=>{
          
               return (<li key={facture.id} class="list-group-item">
                Nom du client :{facture.NomClient} <br />
                Validité : {facture.Validite} <br />
                Tva: {facture.TVA} <br />
                Montant HT: {facture.MontantHT} <br />
                Montant TTC: {facture.MontantTTC} <br />
                Montant de la facture en lettres: {facture.MONTANTLETTRES}


                </li>)

        })
      }
      </ul>
    </div>
  )
}

export default ListFactures
