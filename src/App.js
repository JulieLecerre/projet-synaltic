import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ResultatsPrecedents from './pages/ResultatsPrecedents';
import ZoneDeCode from './pages/ZoneDeCode';

const App = () => {
  return (
 <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Accueil} />
      <Route path="/zone-de-code" exact component={ZoneDeCode}/>
      <Route path="/resultats-precedents" exact component={ResultatsPrecedents}/>
    </Switch>
 </BrowserRouter>
  );
};

export default App;
