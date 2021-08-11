import React from 'react';
import Navigation from '../components/Navigation';
import Regles from '../components/Regles';

const Accueil = () => {
    return (
        <div>
            <Navigation/>   
            <h1>Bienvenu sur notre application</h1> 
            <Regles/> 
        </div>
            
    );
};

export default Accueil;