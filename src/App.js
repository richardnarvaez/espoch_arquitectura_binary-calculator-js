import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import * as ROUTES from './constants/routes';
import Index from './components/views/index';
import Home from './components/views/home';
import About from './components/views/about';
import NotFound from './components/views/notfound';

function App() {
  return (

    <Router>
      <div>
        <div>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Index} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
