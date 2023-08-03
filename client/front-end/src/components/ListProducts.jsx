import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';


const ListProducts = () => {

const [listProducts,setProducts] = useState([]);





useEffect(()=> async ()=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/products')
        setProducts(response.data);
    } catch (error) {
        console.error(error);
    }
    },[]);

    return (
        <div className='container m-5 w-50'>
            <h1 className='text-center'>liste des produits</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>reference</th>
                        <th>nom</th>
                        <th>quantite</th>
                        <th>prix</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts.map((product)=>(
                        
                            <tr>
                                <td>{product.reference}</td>
                                <td>{product.nom}</td>
                                <td>{product.quantite}</td>
                                <td>{product.prix}</td>
                            </tr>
                    ))}
                </tbody>    
            </table>

            <Link to={'/products/add'} className='btn btn-lg btn-primary'>Ajouter</Link>
            
        </div>
    );
};

export default ListProducts;