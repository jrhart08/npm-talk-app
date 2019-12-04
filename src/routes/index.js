import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BadStandsPage from '../pages/BadStandsPage';
import BetterStandsPage from '../pages/BetterStandsPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/stands-bad" component={BadStandsPage} />
    <Route path="/stands-better" component={BetterStandsPage} />
  </Switch>
);

export default Routes;
