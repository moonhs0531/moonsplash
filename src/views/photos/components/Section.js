import React from 'react';
import styled from 'styled-components';

function Section({ children, title }) {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  );
}

const Container = styled.div`
    margin-top: 50px;
  h3{
    margin-bottom: 30px;
    font-size: 18px;
    color: #111111;
  }
`;

export default Section;
