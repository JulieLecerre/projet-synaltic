import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import HistoriqueDesActions from './pages/HistoriqueDesActions';
import ResultatsPrecedents from './pages/ResultatsPrecedents';
import ZoneDeCode from './pages/ZoneDeCode';

const App = () => {
  return (
 <BrowserRouter>
    <Switch>
      <Route path="/accueil" exact component={Accueil} />
      <Route path="/zone-de-code" exact component={ZoneDeCode}/>
      <Route path="/resultats-precedents" exact component={ResultatsPrecedents}/>
      <Route path="/historique-des-actions" exact component={HistoriqueDesActions}/>
    </Switch>
 </BrowserRouter>
  );
};

export default App;
