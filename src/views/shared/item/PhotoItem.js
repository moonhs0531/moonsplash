import React from 'react';
import styled from 'styled-components';

function PhotoItem({ item }) {
  return (
    <Container>
      <Thumb>
        <img src={item.urls.regular} alt={item.alt_description} />
      </Thumb>
    </Container>
  );
}

const Container = styled.div`
`;

const Thumb = styled.div`
    img{
      width: 100%;
      object-fit: cover;
    }
`;

export default React.memo(PhotoItem);

