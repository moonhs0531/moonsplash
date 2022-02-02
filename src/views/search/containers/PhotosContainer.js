import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import { ActionCreators } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/layout/Layout.Styled';
import PhotoList from '../../shared/list/PhotoList';
import Spinner from '../../shared/loader/Spinner';
import InfiniteScroll from '../../shared/infiniteScroll';

function PhotosContainer() {
  const testParams = useParams();
  console.log(testParams);
  const { query } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.photos.results);
  const [page, setPage] = useState(1);

  const { color, orientation } = qs.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (page === 1) return;

    dispatch(ActionCreators.getSearchPhotos({
      query,
      page,
      color,
      orientation,
    }));
  }, [dispatch, page, color, orientation]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const next = () => {
    setPage((p) => p + 1);
  };

  if (!searchResults) return <Spinner />;

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll
next={next}
length={searchResults?.length}
        >
          <PhotoList data={searchResults} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
margin-top: 40px;
`;

export default PhotosContainer;
