import React from 'react';

const Bouton = (props) => {
    return (
        <div>
            <button className= "styleBouton" onClick={props.fonction}>
                {props.texteBouton}
            </button>
        </div>
    );
};

export default Bouton;