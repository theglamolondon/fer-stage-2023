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
import SubFacturesMenu from '../component/SubFacturesMenu';

export default function DetailsFacture() {

    const navigate = useNavigate();
	const [factures, setFactures] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [connect, setConnect] = useState(true);

    const getFactures = () => {
        setIsLoading(true)
        const url="http://127.0.0.1:8090/factures";
        axios.get(url)
        .then((response)=>{
			if(response.status === 200){
				setFactures(response.data);
            }else {
				setFactures([]);
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        })
    };

	useEffect(() =>  getFactures() , []);

    return (
        <div>
            <Navigation />
            <div className="content">
                    <h2 className="title">Liste des Factures</h2>
                    <div className="description d-flex ">
                        <div className="left col-3  border-color-secondary">
                            <SubFacturesMenu />
                        </div>
                        <div className="right col-9">
                           
                        {factures.length === 0 && <h5 className="title text-secondary">Facture Inconnue !!</h5> }
                        </div>
                    </div>                
            </div>
        </div>
    )
}