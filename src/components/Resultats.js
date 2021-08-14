import React from 'react';

const Resultats = () => {
    let cookie = localStorage.getItem("historique");
    let cookieJson = JSON.parse(cookie);

    if (cookieJson==null){
        cookieJson = [];
    }

    return (
        <div>
            <div>
                {
                    cookieJson.map((resultat)=> (

                    <div>
                        <span>{resultat.date}      </span>
                        <span>{resultat.scoreOk}      </span>
                        <span>{resultat.scoreBug}      </span>
                        <span>{resultat.scorePc}</span>
                        <span>{resultat.resultat}</span>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Resultats;