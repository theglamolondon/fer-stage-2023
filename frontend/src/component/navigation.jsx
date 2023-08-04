import { Link, useNavigate } from 'react-router-dom';
import '../assets/static/navigation.css'
import { useEffect, useState } from 'react';
import { checkUserConnect, removeUser } from '../utils/checkUser';

const Navigation = ({active, connect = false, theme = 'w'}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isconnect, setIsconnect] = useState(connect);

    const logout = (e) => {
        e.preventDefault();
        removeUser();
        setIsconnect(false);
        navigate("/login", { replace: true })
    }
    useEffect(() =>{
        setIsconnect(checkUserConnect())
        setEmail(localStorage.getItem("email"))
    }, [])
    return (
      <header className={'bg-white'}>
        <h2 className="g">ETS LYAM</h2>
        <ul>
          {/* <li className="active"><Link to={"/"}>Accueil</Link></li> */}
        </ul>
        <div className="user">
            {!isconnect ? <Link to={"/login"} className='btn btn-primary'>Connexion</Link>
                : <ul>
                    <li>
                        <a href="#">
                            <i className="fas fa-bars"></i> 
                            <i className="fas fa-user-circle"></i>
                        </a>
                        <ul>
                            <h6 className='text-secondary text-right p-2' style={{fontSize: '14px'}}>{email}</h6>
                            <li><Link to={"/"}>Produits</Link></li>
                            <li><Link to={"/factures"}>Factures</Link></li>
                            <li><a href='#' onClick={(e) => logout(e)}>Deconnexion</a></li>
                        </ul>
                    </li>
                </ul>
            }
        </div>
      </header>
    );
};
export default Navigation;