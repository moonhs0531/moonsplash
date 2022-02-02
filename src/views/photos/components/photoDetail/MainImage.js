import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { IconZoomIn, IconZoomOut } from '../../../../icons';

function MainImage({ imgUrl }) {
  const [isZoom, setIsZoom] = useState(false);
  const [noImage, setNoImage] = useState(false);

  const handleZoom = () => {
    setIsZoom((v) => !v);
  };

  const handleErrorImage = () => {
    setNoImage(true);
  };

  return (
    <Container className={cn({ isZoom })}>
      <ImageBox>
        <Image>
          {
                        noImage
                          ? '이미지가 없습니다'
                          : (
                            <img src={imgUrl} alt="" onError={handleErrorImage} />
                          )
                    }
          <ButtonZoom onClick={handleZoom}>
            {
                            isZoom
                              ? <IconZoomIn />
                              : <IconZoomOut />
                        }
          </ButtonZoom>
        </Image>
      </ImageBox>
    </Container>
  );
}

const Container = styled.div`
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Image = styled.div`
  position: relative;
  background: #eeeeee;

  img {
    height: 70vh;
    .isZoom & {
      max-height: unset;
      height: auto;
    }
    
  }
`;

const ButtonZoom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: zoom-in;
  padding: 10px;
  svg{
    fill: #fff;
  }
  
  .isZoom & {
    cursor: zoom-out;
  }
`;

export default MainImage;
