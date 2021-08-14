import React from 'react';
import Navigation from '../components/Navigation';
import Resultats from '../components/Resultats';

const ResultatsPrecedents = () => {
    return (
        <div>
            <Navigation/>
           <h1>Résultats précédents</h1> 
           <Resultats/>
        </div>
    );
};

export default ResultatsPrecedents;