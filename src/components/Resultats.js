import React from 'react';

const Resultats = () => {
    let cookie = localStorage.getItem("historique");
    let cookieJson = JSON.parse(cookie);

    if (cookieJson==null){
        cookieJson = [];
    }

    return (
        <div>
            <div className= "resultatTableau">
                <table className="resultatsPrecedentsTableau">
                    <theader>
                        <tr>
                            <th class="resultatColonne">Date</th>
                            <th class="resultatColonne">Score Ok</th>
                            <th class="resultatColonne">Score Bug</th>
                            <th class="resultatColonne">Score Pc</th>
                            <th class="resultatColonne">Résultat</th>
                        </tr>
                    </theader>
                    <tbody>
                        {
                            cookieJson.map((resultat)=> (

                                <tr className="resultatLigne">
                                    <td class="resultatColonne">{resultat.date}</td>
                                    <td class="resultatColonne">{resultat.scoreOk}</td>
                                    <td class="resultatColonne">{resultat.scoreBug}</td>
                                    <td class="resultatColonne">{resultat.scorePc}</td>
                                    <td class="resultatColonne">{resultat.resultat}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Resultats;
