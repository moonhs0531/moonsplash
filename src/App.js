import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Routes from './Routes';
import HeaderContainer from './views/shared/header/containers/HeaderContainer';
import TopicsLnbContainer from './views/topics/containers/TopicsLnbContainer';
import { GlobalStyle } from './style/GlobalStyle';
import PopupContaine from './views/popup/containers/PopupContaine';

const App = () => (
  <Container>
    <GlobalStyle />
    <HeaderContainer />
    <Route exact path={['/', '/topics', 'topics/:slug']} component={TopicsLnbContainer} />
    <Routes />
    <PopupContaine />
  </Container>

);

const Container = styled.div`

`;

export default App;
