import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import PhotoList from '../../shared/list/PhotoList';
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../../../redux/photos/slice";
import {useInViewport} from "../../../hocks/useInViewport";

function MainPhotoListContainer() {

  const list = useSelector(state => state.photos.list);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(ActionCreators.getPhotos({
      page,
      per_page:10,
    }));
  }, [dispatch, page]);

  const [sentinelRef, isInView] = useInViewport();

  useEffect(() => {
    if(isInView && list.length) {
      setPage((p) => p + 1)
    }
  }, [isInView])

  return (
    <Container>
      <PhotoList data={list} />
      <Sentinel ref={sentinelRef}/>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

const Sentinel = styled.div`
  height: 100px;
  background: #fff;
`;

export default MainPhotoListContainer;
