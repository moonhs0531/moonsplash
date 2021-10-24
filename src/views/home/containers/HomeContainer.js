import React from 'react';
import styled from 'styled-components';

import Visual from '../components/Visual';
import Banner from '../components/Banner';
import MainPhotoListContainer from './MainPhotoListContainer';

function HomeContainer() {
  return (
    <Container>
      <Visual />
      <Banner />
      <MainPhotoListContainer />
    </Container>
  );
}

const Container = styled.div`

`;

export default HomeContainer;
