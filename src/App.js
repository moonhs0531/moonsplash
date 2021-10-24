import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderContainer from './views/shared/header/containers/HeaderContainer';

function App(props) {
  return (
    <Container>
      <HeaderContainer />
      <Routes />
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
