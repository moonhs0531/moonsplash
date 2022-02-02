import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Filter from '../components/Filter';
import Nav from '../components/Nav';

function SearchLnbContainer() {
  return (
    <Container>
      <Nav />
      <Route path="/search/photos/:query">
        <Filter />
      </Route>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SearchLnbContainer;
