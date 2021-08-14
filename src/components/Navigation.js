import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/accueil"activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/zone-de-code"activeClassName="nav-active">
                Zone de code
            </NavLink>
            <NavLink exact to="/resultats-precedents"activeClassName="nav-active">
                Résultats précédents
            </NavLink>
            
        </div>
    );
};

export default Navigation;