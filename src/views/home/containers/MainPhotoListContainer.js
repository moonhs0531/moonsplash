import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PhotoList from '../../shared/list/components/PhotoList';

function MainPhotoListContainer() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const result = await axios({
      url: 'https://api.unsplash.com/photos',
      method: 'get',
      params: {
      },

      headers: {
        Authorization: 'Client-ID ZepPXzFL3PNNTm3dBXoI6Bq3sWMu_hCFYdxDjF7jV2M',
      },
    });
    console.log('@@ result', result);
    setPhotos(result.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <Container>
      <PhotoList data={photos} />
    </Container>
  );
}

const Container = styled.div`


`;

export default MainPhotoListContainer;
