
import { Link, useNavigate } from 'react-router-dom';
import '../assets/static/navigation.css'
import { useEffect, useState } from 'react';
import { checkUserConnect, removeUser } from '../utils/checkUser';

const SubFacturesMenu = () => {


    return (
        <ul>
            <li className='active'><Link to={'/factures'}>Liste des Factures</Link></li>
            <li><Link to={"/addFacture"}>Ajouter une facture</Link></li>
        </ul>
    );
};
export default SubFacturesMenu;