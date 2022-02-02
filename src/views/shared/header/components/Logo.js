import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconLogo } from '../../../../icons';

function Logo() {
  return (
    <Container to="/">
      <IconLogo />
      <Text>
        <p><strong>Unsplash</strong></p>
        <p>Photos for everyone</p>
      </Text>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  align-items: center; 
`;

const Text = styled.div`
  margin-left: 10px;
  margin-right: 20px;
    p {
      color: #111111;
      font-size: 13px;
      font-weight: 500;
      
      & + p {
        margin-top: 4px;
      }
      strong{
        font-size: 15px;
        font-weight: 700;
      }
    }
`;

export default Logo;
