import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import SearchScrollMenu from '../components/SearchScrollMenu';
import { ContentContainer } from '../../shared/layout/Layout.Styled';
import { ActionCreators } from '../../../redux/search/slice';

function RelatedSearchContainer() {
  const dispatch = useDispatch();
  const { query } = useParams();
  const location = useLocation();
  const relatedSearches = useSelector((state) => state.search.related_searches);
  const { color, orientation } = qs.parse(location.search, { ignoreQueryPrefix: true });

  console.log('relatedsearch', relatedSearches);

  useEffect(() => {
    dispatch(ActionCreators.getSearch({
      query, color, orientation,
    }));
  }, [query, color, orientation]);

  return (
    <Container>
      <ContentContainer>
        <SearchScrollMenu data={relatedSearches} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`

`;

export default RelatedSearchContainer;
