import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <p className="fs-4 text-center">Menu</p>
    <div className="container mt-5 d-flex justify-content-center">
      {/* <Link to="/create_product" className="btn btn-outline-primary me-3">Ajouter un produit</Link> */}
      <Link to="/create_facture" className="btn btn-outline-secondary me-3">Ajouter une facture</Link>
      <Link to="/list_facture" className="btn btn-outline-success me-3">Liste des factures</Link>
      <Link to="/list_product" className="btn btn-outline-warning">Liste des produits</Link>
    </div>
    </>
  )
}

export default Home
