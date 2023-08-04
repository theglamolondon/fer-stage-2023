import { Link, useNavigate } from 'react-router-dom'
import '../assets/static/login.css'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setIsLoading(true)
        const url="http://127.0.0.1:3000/auth/login";
        console.log(url)
        axios.post(url, {email, password})
        .then((response)=>{
			if(response.status === 200){
                localStorage.setItem("userToken", response.data.token)
                localStorage.setItem("email", response.data.client.email)
				console.log("Reponse : ", response.data)
                navigate('/', {replace: true})
            }else {
				setError('Email ou mot de passe incorrect')
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        });
        setIsLoading(false)
    }
    const connect = (e) =>{
        e.preventDefault();
        setError('')
        if(email === '' || password === ''){
            setError("Nom d'utilisateur ou mot de passe requis")
        }else{
            if(email === 'admin@gmail.ci' && password === 'admin'){
                localStorage.setItem("userToken", 'a')
                localStorage.setItem("email", email)
                navigate('/', {replace: true})

            }
        }
    }

    return(
        <form action="" className='form' onSubmit={(e) => connect(e)}>
            <h1>ETS LYAM</h1>
            <p className='h6 text-danger'>{error}</p>
            <div className="from-group">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' required placeholder='Email' />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="">Mot de passe</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' required placeholder='Mot de passe' />
            </div>
            <br />
            {
                isLoading ? <h6 className='text-danger'>Chargement....</h6>
                : <div>
                    <button type='submit' className='btn btn-primary'>Se connecter</button>
                    <div>
                        <Link replace to={"/register"} className='mt-4 btn btn-block btn-info'>Creer un compte ici</Link>
                    </div>
                </div>
            }
            
        </form>
    )
}