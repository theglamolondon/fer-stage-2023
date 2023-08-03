import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListCustomers = () => {

    const [listCustomers, setCustomers] = useState([]);



    useEffect(()=>async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/customers');
            setCustomers(response.data);
            console.log(listCustomers);
        } catch (error) {
            console.error(error);
        }
    },[]);
    
    return (
        <div className='container m-5 w-60'>
            <h1 className='text-center'>Liste des clients</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Adresse</th>
                        <th>Telephone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listCustomers.map((customer) => (

                        <tr>
                            <td>{customer.nom}</td>
                            <td>{customer.prenom}</td>
                            <td>{customer.adresse}</td>
                            <td>{customer.telephone}</td>
                            <td>{customer.email}</td>
                            <td><Link className='btn btn-outline-warning' to={'/bills/add/:id'}>AJouter une facture</Link></td>
                        </tr>

                    ))}
                </tbody>
                <Link to={'/customers/add'} className='btn btn-lg btn-primary m-5 '>Ajouter</Link>
            </table>

        </div>
    );
};

export default ListCustomers;