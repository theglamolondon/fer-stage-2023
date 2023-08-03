import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Add = () => {

    const [reference, setReference] = useState('');
    const [nom, setNom] = useState('');
    const [quantite, setQuantite] = useState(0);
    const [prix, setPrix] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            reference: reference,
            nom: nom,
            quantite: quantite,
            prix: prix
        };

        axios.post('http://127.0.0.1:8000/api/products', productData)
            .then((response) => {
                console.log('Produit ajouté avec succès !');
                setReference('');
                setNom('');
                setQuantite(0);
                setPrix(0);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du produit :', error);
            });

    };


        return (
            <div className="container mt-5 w-50">
                <h3 className="text-center rounded ">Ajouter un produit</h3>
                <form action='' onSubmit={handleSubmit}>
                    
                    {/* <div className="row"> */}
                    <div className="form-group m-4 ">
                        <label htmlFor="reference">reference</label>
                        <input type="text" className="form-control" name="reference" value={reference} onChange={(e) => setReference(e.target.value)} required  />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="nom">nom</label>
                        <input type="text" className="form-control" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                    </div>
                    {/* </div> */}
                    <div className="form-group m-4">
                        <label htmlFor="quantite">stocks</label>
                        <input type="number" className="form-control" name="stocks" value={quantite} onChange={(e) => setQuantite(e.target.value)} />
                    </div>
                    <div className="form-group m-4">
                        <label htmlFor="prix">prix unitaire</label>
                        <input type="text" className="form-control" name="prix" value={prix} onChange={(e) => setPrix(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg m-4">Ajouter</button>
                    <Link to={'/products'} className='btn btn-lg btn-danger'>Annuler</Link>
                </form>
            </div>
        );
    };

    export default Add;