import React from 'react';
import styled from 'styled-components';

import DetailHeader from './DetailHeader';
import MainImage from './MainImage';
import Info from './Info';

function PhotoDetail({ detail }) {
  return (
    <Container>
      <DetailHeader
                imgUrl={detail.user.profile_image.small}
                username={detail.user.username}
                description={detail?.sponsorship?.tagline}
      />
      <MainImage imgUrl={detail.urls.full} />
      <Info detail={detail} />
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoDetail;
