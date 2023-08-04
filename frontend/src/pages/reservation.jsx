/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import image0 from '../assets/img/00.jpg';
import image1 from '../assets/img/01.jpg';
import image2 from '../assets/img/02.jpg';
import image3 from '../assets/img/03.jpg';
import "../assets/static/reservation.css";
import Navigation from "../component/navigation";
import { checkUserConnect } from "../utils/checkUser";

export default function Reservaton() {

    const navigate = useNavigate();
    
    const params = useParams();
    const [site, setSite] = useState({});
    const [isFavoris, setIsFavoris] = useState(false);
    const [dateReservation, setDateReservation] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [reservationLoading, setReservationLoading] = useState(false);

    const getSiteDetails = () => {
        setReservationLoading(true)
        const url="http://127.0.0.1:3000/site";
        axios.get(`${url}/${params.siteId}`)
        .then((response)=>{
			if(response.status === 200){
				setSite(response.data.message);
            }else {
				setSite({});
            }
			setReservationLoading(false);           
        })
        .catch((error) => {
            setReservationLoading(false);
            console.log(error.response);
        })
    };
    const postReservation = () => {
        setReservationLoading(true)
        const url="http://127.0.0.1:3000/site/reservation";
        axios.post(
            url, 
            {siteId: params.siteId, dateReservation}, 
            {headers: {
                Authorization: localStorage.getItem("userToken")
                }
            }).then((response)=>{
			if(response.status === 200){
                navigate('/user/reservations')
            }else {
                setError("Erreur d'enregistrement.")
            }
			setReservationLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
            setError("Erreur d'enregistrement.")
            setReservationLoading(false)
        })
    };
    const ajouterFavoris = () => {
        const url="http://127.0.0.1:3000/client/favoris";
        axios.post(
            url, 
            { siteId: params.siteId }, 
            {headers: {
                Authorization: localStorage.getItem("userToken")
                }
            }).then((response)=>{
			if(response.status === 200){
                setIsFavoris(true);
            }else {
                setError("Erreur d'enregistrement du favori.")
            }        
        })
        .catch((error) => {
            console.log(error.response);
            setError("Erreur d'enregistrement.")
        })
    };

    const reserver = () => {
        if(checkUserConnect()){
            postReservation()
        }else{ navigate("/login"); }
    };

    const changerFavoris = (e) => {
        e.preventDefault();
        (!isFavoris) ? ajouterFavoris() : null;
        // setIsFavoris(!isFavoris)
    }

	useEffect(() => getSiteDetails(), []);

    return(
        <div>
            <Navigation theme={'g'} />
            <div className="content">
                {site?._id !== undefined && <>
                    <h2 className="title">{site.designation}</h2>
                    <div className="infos">
                        <div className="left">
                            <div> <i className="far fa-clock"></i> <span>24h/24</span> </div>
                            <div> <i className="far fa-map"></i> <span>{site.ville}</span> </div>
                            <div> <i className="fas fa-tag"></i> <span>Aventure, Culture/Musé</span> </div>
                        </div>
                        <div className="right">
                            <div> <i className="fas fa-upload"></i> <span> Partager</span> </div>
                            <div className={isFavoris ? 'text-success' : ''} onClick={(e) => changerFavoris(e)} style={{cursor: "pointer"}}> <i className={`fas fa-heart`}></i> <span> Favoris</span> </div>
                        </div>
                    </div>
                    <div className="mes-images img">
                        <div className="main-image"><img src={image0} alt="" /></div>
                        <div className="other-image img">
                            <div><img src={image0} alt="" /></div>
                            <div><img src={image1} alt="" /></div>
                            <div><img src={image2} alt="" /></div>
                            <div><img src={image3} alt="" /></div>
                        </div>
                        <div className="details">
                            <div className="status">OUVERT</div>
                            <div className="t"><h2>24h/24 - 7j/7</h2></div>
                            <div className="stat">
                                <span className="label">{site.designation}</span>
                                <span><i className="fas fa-star y"></i> <b>4.72 • </b> 60 votes</span>
                            </div>
                            <div className="price">{`${site.prix} F CFA`}</div>
                            <div className="dates">
                                <input type="date" 
                                    onChange={(e) => setDateReservation(e.target.value) } 
                                    name="dates" id="date" required 
                                    placeholder="Date de visite" />
                                <input type="time" name="times" id="time" required placeholder="Heure" />
                            </div>
                            <button onClick={(e) => reserver()} >RESERVER</button>
                        </div>
                    </div>
                    <div className="description">
                        <div className="onglet">
                            <li className="text-info"><h5>Description</h5></li>
                        </div>
                        <div className="contenu">
                            <p className="h5 col-10 text-secondary">
                                {site.description}
                            </p>
                        </div>
                    </div>
                </>}
                {site?._id === undefined && <h2 className="title">Aucune information trouvée</h2> }
            </div>
        </div>
    )
}