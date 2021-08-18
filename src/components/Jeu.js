import React, { Component } from "react";
import ResultatsPrecedents from "../pages/ResultatsPrecedents";
import Bouton from './Bouton';
import Graphique from "./Graphique";
import Score from "./Score";


class Jeu extends Component {     //on crée une classe Jeu qui hérite de la classe Component

    constructor(props) {        //On crée le constructeur de notre classe Jeu ayant pour argument props
        super(props);           // On appelle le contructeur de la classe parente (Component)
         
                               
        
        
        this.state = {                  // state est un dictionnaire contenant toutes les variables d'état, ici on crée une variable d'état score utilisateur que l'on initialise à 0
            scoreOk: 0,                 // state met à jour l'interface lorsque la valeur de la variable (les scores) changent
            scoreBug: 0,
            scorePc: 0,
            affichageResultat:"",
            historiqueDesActions:[]
        }
        this.min_coderBien=5;           // En faisant this.X je crée une variable pour la classe " Jeu", je peux donc réutiliser cette variable à n'importe quel moment. Si on ne met pas this, React sort de la fonction et détruit la variable
        this.max_coderBien=10;
        this.min_coderViteOk=3;
        this.max_coderViteOk=13;
        this.min_coderViteBug=4;
        this.max_coderViteBug=12;
        this.min_tester=3;
        this.max_tester=13;
        this.min_scorePc=3;
        this.max_scorePc=13;
        

         
        this.coderBien = this.coderBien.bind(this);
        this.coderVite = this.coderVite.bind(this);
        this.tester = this.tester.bind(this);
        this.recommencer = this.recommencer.bind(this);

    }

           


    render() {
        return (
            <div>
                <div className= "boutons">
                    <Bouton texteBouton="Coder bien" fonction={this.coderBien}/>
                    <Bouton texteBouton="Coder vite" fonction={this.coderVite}/>
                    <Bouton texteBouton="Tester" fonction={this.tester}/>
                    <Bouton texteBouton="Recommencer" fonction={this.recommencer}/>
                </div>
                <div className="affichageResultat">
                    {this.state.affichageResultat}
                </div>
                <div className="resultatsJeu">
                    <div className="scores">
                        <Score texte="Code OK" score={this.state.scoreOk} classNameNombre="codeOkNombre"/>
                        <Score texte="Code Bug" score={this.state.scoreBug} classNameNombre="codeBugNombre"/>
                        <Score texte="Code Pc" score={this.state.scorePc} classNameNombre="codePcNombre"/>
                    </div>
                    <Graphique data={this.state.historiqueDesActions}/>
                </div>
                
            </div>
    
        );
    }


    genererNombreAleatoire(min, max){
        let nombreAleatoire=Math.floor(Math.random()*(max-min)+min);
        return nombreAleatoire;
    }


    coderBien() {                //générer nombre aléatoire entre un min et un max

        if(this.state.affichageResultat===""){
            let nombreAleatoire=this.genererNombreAleatoire(this.min_coderBien, this.max_coderBien);
            let scoreTmp=this.state.scoreOk+nombreAleatoire;

            if(scoreTmp+this.state.scoreBug>100){
                scoreTmp=100-this.state.scoreBug-this.state.scoreOk+this.state.scoreOk;
            }
            this.setState({                              // pour mettre à jour la variable d'état, il faut passer par this.setState
                scoreOk: scoreTmp
            }); 

            this.tourPc();
        }
    }


    coderVite() {

        if(this.state.affichageResultat===""){
            let nombreAleatoireOk=this.genererNombreAleatoire(this.min_coderViteOk, this.max_coderViteOk);
            let scoreOkTmp=this.state.scoreOk+nombreAleatoireOk;
            let nombreAleatoireBug=this.genererNombreAleatoire(this.min_coderViteBug, this.max_coderViteBug);
            let scoreBugTmp=this.state.scoreBug+nombreAleatoireBug;

            if(scoreOkTmp+this.state.scoreBug>100){
                scoreOkTmp=100-this.state.scoreOk-this.state.scoreBug+this.state.scoreOk;
            }
            this.setState({
                scoreOk: scoreOkTmp
            }
            );

            if(scoreBugTmp+scoreOkTmp>100){                         //javascript asynchrone, donc le scoreOk n'a peut etre pas été mis à jour avec le nouveau, nous devons donc mettre scoreOkTmp au lieu de this.state.scoreOk
                scoreBugTmp=100-scoreOkTmp-this.state.scoreBug+this.state.scoreBug;
            }
            this.setState({
                scoreBug : scoreBugTmp
            }
            );

            this.tourPc();
        }
    }

    tester() {

        if(this.state.affichageResultat===""){
            let nombreAleatoire=this.genererNombreAleatoire(this.min_tester, this.max_tester);
            let scoreOkTmp=this.state.scoreOk+nombreAleatoire;
            let scoreBugTmp=this.state.scoreBug-nombreAleatoire;
            
            if(scoreBugTmp<0){
                scoreBugTmp=0;
                scoreOkTmp=this.state.scoreOk+this.state.scoreBug;
            }
            this.setState({
                scoreBug: scoreBugTmp,
                scoreOk: scoreOkTmp
            });
    
            this.tourPc();
        }


    }

    recommencer() {
        this.setState({
            scoreOk: 0,
            scoreBug:0,
            scorePc:0,
            affichageResultat:"",
            historiqueDesActions: []
        });
    }

    tourPc() {

        let nombreAleatoire=this.genererNombreAleatoire(this.min_scorePc,this.max_scorePc);
        let scorePcTmp=this.state.scorePc+nombreAleatoire;

        if(this.state.scorePc+nombreAleatoire>100){
            scorePcTmp=100;
        }

        this.setState({
            scorePc: scorePcTmp
        }, this.verifFinPartie);                //fonction de callback = pour que cette fonction ne soit appellée que lorsque scorePc ait bien été mis à jour
    }

    verifFinPartie() {
        if(this.state.scoreOk===100 && this.state.scorePc!==100){
            this.setState({
                affichageResultat: "Vous avez gagné"
            
            }, this.sauvegardeFinPartie);
        }
        else if(this.state.scorePc===100 && this.state.scoreOk!==100){
            this.setState({
                affichageResultat: "Vous avez perdu"
            }, this.sauvegardeFinPartie);
        }

        else if(this.state.scorePc===100 && this.state.scoreOk===100){
            this.setState({
                affichageResultat: "Egalité"
            }, this.sauvegardeFinPartie);
        }
    
        this.sauvegardeCoup();
    }

    sauvegardeCoup() {
        console.log("________ SAUVEGARDE COUP ________");
        console.log(this.state.historiqueDesActions);
        let resultatCoup= {scoreOk: this.state.scoreOk, scoreBug: this.state.scoreBug, scorePc: this.state.scorePc};
        /*
        Nous créons une copie du tableau this.state.historiquedesactions pour pouvoir lui ajouter un
        élément, car c'est une variable d'état. elle devient historiquedesactionsTmp qui n'est pas
        une variable d'état et qu'on peut modifier sans passer par setState
        */
        let historiqueDesActionsTmp = [...this.state.historiqueDesActions];
        historiqueDesActionsTmp.push(resultatCoup);

        this.setState({
            historiqueDesActions: historiqueDesActionsTmp
        })
        
        console.log(this.state.historiqueDesActions);
    }

    sauvegardeFinPartie() {
        let cookie = localStorage.getItem("historique");
        let cookieJson = JSON.parse(cookie);

        if (cookieJson==null){
            cookieJson = [];
        }

        let dateActuelle = new Date();
        let dateStr = dateActuelle.getFullYear()+"/"+dateActuelle.getMonth()+"/"+dateActuelle.getDay()+" "+dateActuelle.getHours()+":"+dateActuelle.getMinutes()+":"+dateActuelle.getSeconds()

        let resultatPartie = {date: dateStr, scoreOk:this.state.scoreOk, scoreBug:this.state.scoreBug, scorePc: this.state.scorePc, resultat:this.state.affichageResultat};
        cookieJson.push(resultatPartie);

        let cookieStr=JSON.stringify(cookieJson);
        localStorage.setItem("historique", cookieStr);
    }
}



  export default Jeu;
