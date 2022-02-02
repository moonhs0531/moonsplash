import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../shared/loader/Spinner';
import { ActionCreators } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/layout/Layout.Styled';
import GridList from '../../shared/list/GridList';
import CollectionItem from '../../shared/item/CollectionItem';
import InfiniteScroll from '../../shared/infiniteScroll';

function CollectionsContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const searchResults = useSelector((state) => state.search.collections.results);

  const { query } = useParams();

  useEffect(() => {
    if (page === 1) return;
    dispatch(ActionCreators.getSearchCollections({
      query, page,
    }));
  }, [dispatch, query, page]);

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
          <GridList data={searchResults}>
            {(item) => <CollectionItem item={item} />}
          </GridList>
        </InfiniteScroll>
      </ContentContainer>

    </Container>
  );
}

const Container = styled.div`
margin-top: 40px;
`;

export default CollectionsContainer;
