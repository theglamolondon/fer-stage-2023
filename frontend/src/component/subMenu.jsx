
import { Link, useNavigate } from 'react-router-dom';
import '../assets/static/navigation.css'
import { useEffect, useState } from 'react';
import { checkUserConnect, removeUser } from '../utils/checkUser';

const SubMenu = () => {


    return (
        <ul>
            <li className='active'><Link to={'/'}>Liste des Produits</Link></li>
            <li><Link to={"/addProduit"}>Ajouter un produit</Link></li>
        </ul>
    );
};
export default SubMenu;