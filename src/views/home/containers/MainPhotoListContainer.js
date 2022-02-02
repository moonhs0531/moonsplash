import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PhotoList from '../../shared/list/PhotoList';
import { ActionCreators } from '../../../redux/photos/slice';
import InfiniteScroll from '../../shared/infiniteScroll';

function MainPhotoListContainer() {
  const list = useSelector((state) => state.photos.list);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(ActionCreators.getPhotos({
      page,
      per_page: 10,
    }));
  }, [dispatch, page]);

  const next = () => {
    setPage((p) => p + 1);
  };

  return (
    <Container>
      <InfiniteScroll
next={next}
length={list.length}
      >
        <PhotoList data={list} />
      </InfiniteScroll>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default MainPhotoListContainer;
