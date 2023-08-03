import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddClient = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const clientData = {
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            telephone: telephone,
            email: email
        };

        axios.post('http://127.0.0.1:8000/api/customers', clientData)
            .then((response) => {
                console.log('Client ajouté avec succès !');
                setNom('');
                setPrenom('');
                setAdresse('');
                setTelephone('');
                setEmail('');
            })
            .catch((error) => {
                console.error('Erreur lors de l\'ajout du client :', error);
            });
    };

    return (
        <div className="container mt-5 w-50">
            <h3 className="text-center rounded">Ajouter un client</h3>
            <form action='' onSubmit={handleSubmit}>
                <div className="form-group m-4">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" className="form-control" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                </div>
                <div className="form-group m-4">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" className="form-control" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                </div>
                <div className="form-group m-4">
                    <label htmlFor="adresse">Adresse</label>
                    <input type="text" className="form-control" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                </div>
                <div className="form-group m-4">
                    <label htmlFor="telephone">Téléphone</label>
                    <input type="tel" className="form-control" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                </div>
                <div className="form-group m-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg m-4">Ajouter</button>
                <Link to={'/customers'} className='btn btn-lg btn-danger'>Annuler</Link>
            </form>
        </div>
    );
};

export default AddClient;
