import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function TageRelated() {
  const tags = useSelector((state) => state.photos.detail.tags);

  return (
    <Container>
      TageRelated
    </Container>
  );
}

const Container = styled.div`

`;

export default TageRelated;
