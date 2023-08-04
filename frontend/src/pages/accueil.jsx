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

export default function Accueil() {

    const navigate = useNavigate();
	const [produits, setProduits] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [connect, setConnect] = useState(true);

    const getProduits = () => {
        setIsLoading(true)
        const url="http://127.0.0.1:8090/produits";
        axios.get(url)
        .then((response)=>{
			if(response.status === 200){
				setProduits(response.data);
            }else {
				setProduits([]);
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        })
    };

	useEffect(() =>  getProduits() , []);

    return (
        <div>
            <Navigation />
            <div className="content">
                {produits.length !== 0 && <>
                    <h2 className="title">Produits</h2>
                    <div className="description d-flex ">
                        <div className="left col-3  border-color-secondary">
                            <SubMenu />
                        </div>
                        <div className="right col-9">
                            
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>Référence</th>
                                    <th>Nom</th>
                                    <th>Quantité</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { produits.length !== 0 && produits.map((item, index) => <tr key={index}>
                                    <td>{item.reference}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><Link to={`/details/${item.reference}`}><i className="fas fa-eye text-info"></i></Link></td>
                                    <td><Link to={`#`} onClick={() => null}><i className="fas fa-trash text-danger"></i></Link></td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </>}
                {produits.length === 0 && <h5 className="title text-secondary">Aucun produit enregistré !!</h5> }
            </div>
        </div>
    )
}