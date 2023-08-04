/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/static/accueil.css';
import '../assets/static/footer.css';
import { Footer } from '../component/footer';
import Header from '../component/header';
import Site from '../component/site';
import { checkUserConnect } from '../utils/checkUser';
import Navigation from '../component/navigation';
import SubMenu from '../component/subMenu';

export default function AddProduct() {

    const navigate = useNavigate();
	const [name, setName] = useState('');
	const [qte, setQte] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [connect, setConnect] = useState(true);

    const saveProduits = () => {
        if(name === '') return null;
        setIsLoading(true)
        const url="http://127.0.0.1:8090/add_produit";
        axios.post(url, {name, quantity: qte})
        .then((response)=>{
			if(response.status === 200){
				navigate("/")
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        })
    };

    return (
        <div>
            <Navigation />
            <div className="content">
                    <h2 className="title">Ajouter un produit</h2>
                    <div className="description d-flex ">
                        <div className="left col-3  border-color-secondary">
                            <SubMenu />
                        </div>
                        <div className="right col-6 p-4">
                            {/* <form action="#" method="post" className='form'> */}
                                <div className="form-group">	
                                    <label htmlFor="name">Nom du produit</label>
                                    <input type="text" onChange={e => setName(e.target.value)} className='form-control' name="name" id="name" />
                                </div>
                                <div className="form-group">	
                                    <label htmlFor="name">Quantité en stock</label>
                                    <input type="number" className='form-control' onChange={e => setQte(e.target.value)} name="qte" id="qte" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" onClick={e => saveProduits()} value="Enregistrer" className='btn btn-primary' />
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
            </div>
        </div>
    )
}