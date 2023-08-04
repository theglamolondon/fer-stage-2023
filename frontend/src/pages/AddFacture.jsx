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

export default function AddFacture() {

    const navigate = useNavigate();
	const [produits, setProduits] = useState([]);
	const [selected, setSelected] = useState([]);
	const [prod, setProd] = useState('');
	const [client, setClient] = useState('');
	const [date, setDate] = useState('');
	const [prix, setPrix] = useState(0);
	const [qte, setQte] = useState(0);
	const [validite, setValidite] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [connect, setConnect] = useState(true);

    const saveFactures = () => {
        if(client === '' ||validite === '') return null;
        setIsLoading(true)
        const url="http://127.0.0.1:8090/factures";
        axios.post(url, {client, validite, date, produits: selected})
        .then((response)=>{
			if(response.status === 200){
				navigate("/factures")
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        })
    };
    
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

    const addProductToFacture = (e) => {
        e.preventDefault();
        const data = prod.split("=__=");
        setSelected([{
            produitId: data[0],
            prixUnitaireHT: prix,
            name: data[1],
            quantity: qte
        }, ...selected])
        console.log(selected)
    };

    const add = (e) =>{
        console.log("Produit ", e.target.value)
        setProd(e.target.value)
    }

	useEffect(() =>  getProduits() , []);

    return (
        <div>
            <Navigation />
            <div className="content">
                    <h2 className="title">Ajouter une facture</h2>
                    <div className="description d-flex ">
                        <div className="left col-3  border-color-secondary">
                            <SubFacturesMenu />
                        </div>
                        <div className="right col-5 p-4">
                            <div className="form-group">	
                                <label htmlFor="name">Nom du client</label>
                                <input type="text" onChange={e => setClient(e.target.value)} className='form-control' />
                            </div>
                            <div className="form-group">	
                                <label htmlFor="name">Date Facture</label>
                                <input type="date" className='form-control' onChange={e => setDate(e.target.value)} name="date" id="date" />
                            </div>
                            <div className="form-group">	
                                <label htmlFor="name">Validité</label>
                                <input type="text" onChange={e => setValidite(e.target.value)} className='form-control' />
                            </div>
                            <h3>Ajouter Produits</h3>
                            <div className="form-group float-right">
                                <a href="#" onClick={(e) => addProductToFacture(e)} className='btn btn-info clear-right'>Ajouter Produit</a>
                            </div>

                            <div className="form-group">	
                                <label htmlFor="name">Produit</label>
                                <select className='form-control' onChange={e => add(e)} name="produit" id="">
                                    { produits.map((produit) => <option key={produit.reference} value={`${produit.reference}=__=${produit.name}`}>{produit.name}</option>) }
                                </select>
                            </div>
                            <div className="form-group">	
                                <label htmlFor="name">Prix HT</label>
                                <input type="number" className='form-control' onChange={e => setPrix(e.target.value)} name="prix" id="prix" />
                            </div>
                            <div className="form-group">	
                                <label htmlFor="name">Quantité</label>
                                <input type="number" className='form-control' onChange={e => setQte(e.target.value)} name="qte" id="qte" />
                            </div>
                            
                            <div className="form-group">
                                <input type="submit" onClick={e => saveFactures()} value="Enregistrer" className='btn btn-block btn-primary' />
                            </div>
                        </div>
                        <div className="col-4 text-secondary p-2">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prix</th>
                                        <th>Qte</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selected.map((item, index) => <tr key={index}>
                                            <td> {item.name}</td>
                                            <td> {item.prixUnitaireHT}</td>
                                            <td> {item.quantity}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                            { selected.length === 0 && <h6>Aucun produit ajouté</h6> }
                        </div>
                    </div>
            </div>
        </div>
    )
}