import React from 'react';
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand  text-info " href="#">Fer</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active ">
                            <NavLink className="nav-link"to={'/products'}>Acceuil <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink to={'/customers'} className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Clients
                            </NavLink>
                            <div className="dropdown-menu ">
                                <NavLink className="dropdown-item" href="#">Listes des CLients</NavLink>
                                <NavLink className="dropdown-item" href="#"><i className='fa fa-plus'></i>Ajouter</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink   className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="true">
                                Factures
                            </NavLink>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" href="#">Listes factures</NavLink>
                                <NavLink className="dropdown-item" href="#"><i className='fa fa-plus'></i>Ajouter</NavLink>
                            </div>
                        </li>
                        
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;