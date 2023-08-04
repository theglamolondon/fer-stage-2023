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

export default function Factures() {

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
                            
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>N°</th>
                                    <th>Nom du client</th>
                                    <th>Date d'émission</th>
                                    <th>Validité</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { factures.length !== 0 && factures.map((item, index) => <tr key={index}>
                                    <td>{item.factureId}</td>
                                    <td>{item.client}</td>
                                    <td>{item.date}</td>
                                    <td>{item.validite}</td>
                                    <td><Link to={`/factures/details/${item.reference}`}><i className="fas fa-eye text-info"></i></Link></td>
                                    <td><Link to={`#`} onClick={() => null}><i className="fas fa-trash text-danger"></i></Link></td>
                                </tr>)
                                }
                                
                            </tbody>
                        </table>
                        {factures.length === 0 && <h5 className="title text-secondary">Aucune facture enregistrée !!</h5> }
                        </div>
                    </div>                
            </div>
        </div>
    )
}