import React, { Component } from "react";
import Bouton from './Bouton';
import Score from "./Score";


class Jeu extends Component {     //on crée une classe Jeu qui hérite de la classe Component

    constructor(props) {        //On crée le constructeur de notre classe Jeu ayant pour argument props
        super(props);           // On appelle le contructeur de la classe parente (Component)
        this.myValue = 0;       // On attribue la valeur 0. En faisant this.X je crée une variable pour la classe " Jeu", je peux donc réutiliser cette variable à n'importe quel moment.
        
        
        this.state = {                  // state est un dictiionnaire contenant toutes les variables d'état, ici on crée une variable d'étéat score utilisateur que l'on initialise à 0
            scoreUtilisateur: 0,
            scoreCodeOk: 0,
            scoreCodeBug: 0
        }
        this.min_coderBien=5;
        this.max_coderBien=10;
        this.min_coderVite=10;
        this.max_coderVite=20;

        this.myFunction = this.myFunction.bind(this);
        this.coderBien = this.coderBien.bind(this);
        this.coderVite = this.coderVite.bind(this);
        this.tester = this.tester.bind(this);
        this.abandonner = this.abandonner.bind(this);

    }

    myFunction() {
        this.setState({             // pour mettre à jour la variable d'état, il faut passer par this.setState
            scoreUtilisateur: this.state.scoreUtilisateur+1
        });
        console.log(this.state.scoreUtilisateur);
    }

    render() {
        return (
            <div>
                <div>
                    <Bouton texteBouton="Coder bien" fonction={this.coderBien}/>
                    <Bouton texteBouton="Coder vite" fonction={this.coderVite}/>
                    <Bouton texteBouton="Tester" fonction={this.myFunction}/>
                    <Bouton texteBouton="Abandonner" fonction={this.myFunction}/>
                </div>
                <div>
                    {this.state.scoreCodeOk}
                </div>
                <div>
                    {this.state.scoreCodeBug}
                </div>
                
            </div>
    
        );
    }

    coderBien() {                //générer nombre aléatoire entre un min et un max
        let nombreAleatoire=Math.floor(Math.random()*(this.max_coderBien-this.min_coderBien)+this.min_coderBien);
        this.setState({            
            scoreCodeOk: this.state.scoreCodeOk+nombreAleatoire
        });
        console.log(nombreAleatoire);
        return nombreAleatoire;   
    }
    
    coderVite() {
        let nombreAleatoireOk=Math.floor(Math.random()*(this.max_coderVite-this.min_coderVite)+this.min_coderVite);
        this.setState({            
            scoreCodeOk: this.state.scoreCodeOk+nombreAleatoireOk
        });
        console.log(nombreAleatoireOk);
        return nombreAleatoireOk; 
          
    }
    
    tester(min,max) {
        let nombreAleatoire=Math.floor(Math.random()*(max-min)+min);
        console.log(nombreAleatoire);
        return nombreAleatoire;   
    }

    abandonner(min,max) {
        let nombreAleatoire=Math.floor(Math.random()*(max-min)+min);
        console.log(nombreAleatoire);
        return nombreAleatoire;   
    }
}

  export default Jeu;
