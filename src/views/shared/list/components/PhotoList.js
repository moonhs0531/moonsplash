import React from 'react';
import styled from 'styled-components';

function PhotoList({ data }) {
  return (
    <Container>
      {
            data.map((item) => <img src={item.urls.small} alt="" />)
        }
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoList;
