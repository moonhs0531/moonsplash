import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderContainer from './views/shared/header/containers/HeaderContainer';
import TopicsLnbContainer from './views/topics/containers/TopicsLnbContainer';
import { GlobalStyle } from './style/GlobalStyle';

function App(props) {
  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <TopicsLnbContainer />
      <Routes />
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
