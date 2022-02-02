import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import PhotosContainer from './PhotosContainer';
import CollectionsContainer from './CollectionsContainer';
import UsersContainer from './UsersContainer';
import RelatedSearchContainer from './RelatedSearchContainer';

function SearchContainer() {
  return (
    <Container>

      {/* <RelatedSearchContainer/> d */}
      <RelatedSearchContainer />

      <Switch>
        <Route exact path="/search/photos/:query" component={PhotosContainer} />
        <Route exact path="/search/collections/:query" component={CollectionsContainer} />
        <Route exact path="/search/users/:query" component={UsersContainer} />
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  padding: 70px 0 50px;
`;

export default SearchContainer;
