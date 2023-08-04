/* eslint-disable react/no-unescaped-entities */
import '../assets/static/register.css'

export default function Register() {
    return(
        <body className='mybody'>
            <form action="" className='formulaire'>
            <h1>INSCRIPTION</h1>
            <label htmlFor="">Nom :</label><br />
            <input type="text" /><br />
            <label htmlFor="">Prenom :</label><br />
            <input type="text" /><br />
            <label htmlFor="">Email</label><br />
            <input type="text" /><br />
            <label htmlFor="">Contacts :</label><br />
            <input type="text" /><br />
            <label htmlFor="">Mot de passe :</label><br />
            <input type="text" /><br />
            <p><a href="">Se connecter ici</a></p>
            <button>S'inscrire</button>
        </form>
        </body>
    )
}