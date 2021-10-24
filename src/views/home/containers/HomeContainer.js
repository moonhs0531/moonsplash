import React from 'react';
import styled from 'styled-components';

import Visual from '../components/Visual';
import Banner from '../components/Banner';
import PhotoList from '../../shared/list/components/PhotoList';

function HomeContainer(props) {
  const {

  } = props;

  return (
    <Container>
      <Visual />
      <Banner />
      <PhotoList />
    </Container>
  );
}

const Container = styled.div`

`;

export default HomeContainer;
