import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PhotoDetailContainer from './PhotoDetailContainer';

function PhotoContainer() {
  const { id } = useParams();

  return (
    <Container>
      <PhotoDetailContainer id={id} />
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoContainer;
