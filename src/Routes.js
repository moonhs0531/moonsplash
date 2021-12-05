import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Topics from './pages/Topics';
import Search from './pages/Search';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/:category/:query" component={Search} />
    <Route path="/" component={Topics} />
  </Switch>

);

export default Routes;
