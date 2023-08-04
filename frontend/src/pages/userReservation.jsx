/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/static/reservation.css";
import Navigation from "../component/navigation";

export default function UserReservations() {

    const navigate = useNavigate();
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getReservations = () => {
        setIsLoading(true)
        const url="http://127.0.0.1:3000/client/reservations";
        axios.get(url,  {headers: {
            Authorization: localStorage.getItem("userToken")
            }
        }).then((response)=>{
			if(response.status === 200){
                console.log(response.data)
				setReservations(response.data);
            }else {
				setReservations([]);
            }         
        })
        .catch((error) => {
            setError(error)
            console.log(error.response);
        });
        setIsLoading(false);  
    };

    const annulerReservation = (reservationId) => {
        const url="http://127.0.0.1:3000/client/reservations/annuler";
        axios.post(url, { reservationId } ,{headers: {
            Authorization: localStorage.getItem("userToken")
            }
        }).then((response)=>{
			if(response.status === 200){
                console.log(response.data)
                setReservations(response.data)
            }        
        })
        .catch((error) => {
            setError(error)
            console.log(error.response);
        });
    };
	
    useEffect(() => getReservations(), []);
    
    return(
        <div>
            <Navigation theme={'g'} />
            <div className="content">
                {reservations.length !== 0 && <>
                    <h2 className="title">Mes réservations</h2>
                    <div className="description">
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary">
                                <tr>
                                    <th>N°</th>
                                    <th>Nom du site</th>
                                    <th>Date & Heure</th>
                                    <th>Prix</th>
                                    <th>Statut</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { reservations.length !== 0 && reservations.map((item, index) => <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.siteId.designation}</td>
                                    <td>{item.date}</td>
                                    <td>{item.prix} FCFA</td>
                                    <td>
                                    {item.status === 0 && <span className="badge badge-pill badge-primary">Nouveau</span>}
                                    {item.status === 1 && <span className="badge badge-pill badge-success">Terminée</span>}
                                    {item.status === 2 && <span className="badge badge-pill badge-danger">Annulée</span>}
                                    </td>
                                    <td><Link to={`/details/${item.siteId._id}`}><i className="fas fa-eye text-info"></i></Link></td>
                                    <td>{item.status === 0 && <Link to={`#`} onClick={() => annulerReservation(item._id)}><i className="fas fa-trash text-danger"></i></Link>}</td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </>}
                {reservations.length === 0 && <h5 className="title text-secondary">Aucune reservation trouvée !!</h5> }
            </div>
        </div>
    )
}