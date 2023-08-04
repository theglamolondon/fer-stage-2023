import wild from '../assets/img/cartoon.png'
import Navigation from './navigation';


const Header = ({connect}) => {
  return (
    <div className="entete">
      <Navigation connect={connect} active="accueil" />
      <div className='banner'>
        <img src={wild} alt="" />
        <div className="texte">
            <h1>
            EXPLOREZ LA CÔTE <br /> D’IVOIRE DANS TOUTE
            <br />
            SA DIVERSITE
            </h1>
        </div>
      </div>
      <Recherche />
    </div>
  );
};

const Recherche = () => {
  return (
    <div className="reservation">
      <label htmlFor="">Choisissez une ville </label>
      <div>
        <select name="s_ville" id="ville" >
            <option value="#">Rechercher dans toutes les villes</option>
            <option value="#">Abidjan</option>
            <option value="#">Bassam</option>
        </select>
      </div>
    </div>
  );
};
export default Header;
