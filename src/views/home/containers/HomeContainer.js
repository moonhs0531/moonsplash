import React from 'react';
import styled from 'styled-components';

import Visual from '../components/Visual';
import Banner from '../components/Banner';
import MainPhotoListContainer from './MainPhotoListContainer';
import { ContentContainer } from '../../shared/layout/Layout.Styled';

const HomeContainer = () => (
  <Container>
    <Visual />
    <ContentContainer>
      <Banner />
      <MainPhotoListContainer />
    </ContentContainer>
  </Container>
);

const Container = styled.div`

`;

export default HomeContainer;
