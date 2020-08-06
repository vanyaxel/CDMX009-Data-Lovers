import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import LogInView from './components/LogInView.jsx';
import SignInView from './components/SignInView.jsx';
import InitialView from './components/InitialView.jsx';
import Catalogue from './components/Catalogue.jsx';
import PokemonCenter from './components/PokemonCenter.jsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LogInView} />
          <Route path="/signin" component={SignInView} />
          <Route path="/home" component={InitialView} />
          <Route path="/catalogo" component={Catalogue} />
          <Route path="/centro-pokemon" component={PokemonCenter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;