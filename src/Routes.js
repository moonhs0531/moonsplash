import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Topics from './pages/Topics';
import Search from './pages/Search';

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Search} />
      <Route path="/" component={Topics} />

    </Switch>

  );
}

const Container = styled.div`

    
`;

export default Routes;
