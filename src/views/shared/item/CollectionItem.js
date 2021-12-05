import React from 'react';
import styled from 'styled-components';
import Tags from "../tags";

function CollectionItem({item}) {

    return(
        <Container>
            <Thumb>
                    <Inner>
                        <Left>
                            <ImageBox>
                                <img src={item.preview_photos?.[0]?.urls.regular} alt=""/>
                            </ImageBox>
                        </Left>
                        <Right>
                            <Top>
                                <ImageBox>
                                    <img src={item.preview_photos?.[1]?.urls.regular} alt=""/>
                                </ImageBox>
                            </Top>
                            <Bottom>
                                <ImageBox>
                                    <img src={item.preview_photos?.[2]?.urls.regular} alt=""/>
                                </ImageBox>
                            </Bottom>
                        </Right>
                    </Inner>
            </Thumb>

            <Desc>
                <h3>{item.title}</h3>
                <p>{item.total_photos} photos ·  Curated by {item.user.name}</p>
                <Tags data={item.tags} />
            </Desc>
        </Container>
    )
}

const Container = styled.div`
`;

const Thumb = styled.div`
  position: relative;
  padding-bottom: 70%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  &:hover{
    opacity: 0.85;
  }
`;


const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;

const Left = styled.div`
    width: 70%;
  flex-shrink: 0;
  padding-right: 2px;
`;

const Right = styled.div`
    width: 30%;
`;

const Top = styled.div`
    padding-bottom: 1px;
  height: 50%;
`;

const Bottom = styled.div`
  padding-top: 1px;
  height: 50%;
`;

const ImageBox = styled.div`
    background: #eee;
  width: 100%;
  height: 100%;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const Desc = styled.div`
  padding-top: 16px;
  padding-bottom: 20px;
    h3{
      font-size: 18px;
      color: #111;
      margin-bottom: 8px;
      font-weight: bold;
    }
  p{
    margin-bottom: 15px;
    font-size: 14px;
    color: #767676;
  }
`;
export default CollectionItem;
