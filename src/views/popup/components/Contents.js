import React from 'react';
import styled from 'styled-components';

import PhotoDetailContainer from '../../photos/containers/PhotoDetailContainer';

function Contents({ selectedId }) {
  return (
    <Container>
      <PhotoDetailContainer id={selectedId} />
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  padding: 20px;
`;

export default Contents;
