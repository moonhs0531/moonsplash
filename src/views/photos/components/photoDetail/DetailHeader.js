import React from 'react';
import styled from 'styled-components';

function DetailHeader({ imgUrl, username, description }) {
  return (
    <Container>
      <UserInfo>
        <img src={imgUrl} alt="" />
        <Desc>
          <h2>{username}</h2>
          <p>{description}</p>
        </Desc>
      </UserInfo>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 30px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img{
    margin-right: 8px;
  }
`;

const Desc = styled.div`
  h2{
    font-size: 15px;
    color: #111111;
    margin-bottom: 2px;
    line-height: 1.4;
    font-weight: 600;
  }
  
  p{
    font-size: 11px;
    color: #111111;
  }
`;

export default DetailHeader;
