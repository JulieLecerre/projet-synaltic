import React, { Component } from 'react';

class Score extends Component  {
    constructor(props) {
        super(props);
        this.score=props.score;
        this.state = {                  // state est un dictiionnaire contenant toutes les variables d'état, ici on crée une variable d'étéat score utilisateur que l'on initialise à 0
            scoreUtilisateur: 0
        }
    }

    render() {
        return(
            <div>
                {this.state.scoreUtilisateur}
            </div>
        );
    }
}

export default Score;