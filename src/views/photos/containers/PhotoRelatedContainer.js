import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PhotoList from '../../shared/list/PhotoList';
import { ActionCreators } from '../../../redux/photos/slice';

function PhotoRelatedContainer({ id }) {
  const related = useSelector((state) => state.photos.related?.[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (related) return;

    dispatch(ActionCreators.getPhotosRelated(id));
  });

  if (!related?.results) return null;

  return (
    <Container>
      <PhotoList data={related.results} />
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoRelatedContainer;
