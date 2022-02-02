import React from 'react';
import styled from 'styled-components';

function UserItem({ item }) {
  return (
    <Container>
      <UserContent>
        <User>
          <UserInfo>
            <img src={item.profile_image.medium} alt="" />
            <UserText>
              <h3>{item.name}</h3>
              <p>@{item.username}</p>
            </UserText>
          </UserInfo>
          {
                        item.for_hire
                        && <button type="submit">hire</button>
                    }
        </User>

        <UserImg>

          {
                    item.photos.map((img) => <img src={img.urls.thumb} alt="" />)
                }
        </UserImg>

        <Button>
          View profile
        </Button>

      </UserContent>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    border-radius: 50px;
    margin-right: 16px;
  }
  margin-bottom: 16px;
  
  button{
    background: transparent;
    border:1px solid #d1d1d1;
    padding: 8px;
    border-radius: 4px;
    color: #797979;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserContent = styled.div`
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 4px;
`;

const UserText = styled.div`
    h3{
      color: #111;
      font-size: 18px;
      font-weight: bold;
    }
  
  p{
    margin-top: 4px;
    font-size: 15px;
    color: #767676;
  }
`;

const UserImg = styled.div`
    img{
      width: 33.3%;
      height: 82px;
      padding-right: 8px;
    }
  
    img:last-child{
    padding-right: 0;
  }
`;

const Button = styled.div`
  border-radius: 4px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  color: #797979;
  font-size: 14px;
  width: 100%;
  border: 1px solid #d1d1d1;
`;

export default UserItem;
