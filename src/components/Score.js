import React from 'react';

const Score = (props) => {
    return (
        <div className="score">
            <div className="scoreTexte">
                {props.texte}
            </div>
            <div className={"scoreNombre "+props.classNameNombre}>
                {props.score} %
            </div>
        </div>
    );
};

export default Score;