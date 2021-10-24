import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>

  );
}

const Container = styled.div`

`;

export default Routes;
