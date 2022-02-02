import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import CollectionRelated from '../components/CollectionRelated';
import PhotoRelatedContainer from './PhotoRelatedContainer';
import { ActionCreators } from '../../../redux/photos/slice';
import PhotoDetail from '../components/photoDetail/PhotoDetail';
import { ContentContainer } from '../../shared/layout/Layout.Styled';
import Tags from '../../shared/tags';
import Section from '../components/Section';

function PhotoDetailContainer({ id }) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.photos.detail?.[id]);

  useEffect(() => {
    dispatch(ActionCreators.getPhotosById(id));
  }, [id]);

  if (!detail) return null;

  return (
    <Container>
      <PhotoDetail detail={detail} />
      <ContentContainer>
        <Section title="Related tags">
          <Tags data={detail.tags} />
        </Section>
        <Section title="Related photos">
          <PhotoRelatedContainer id={id} />
        </Section>
        <Section title="Related collections">
          <CollectionRelated data={detail.related_collections.results} />
        </Section>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`

`;

export default PhotoDetailContainer;
