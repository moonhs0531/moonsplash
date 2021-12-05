import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import SearchBox from '../../searchBox';
import Nav from '../components/Nav';
import Menu from '../components/Menu';

function HeaderContainer(props) {
  return (
    <Container>
      <Logo />
      <SearchBox shape={"round"} />
      <Nav />
      <Menu />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;
  
`;

export default HeaderContainer;
