import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../shared/loader/Spinner';
import { ActionCreators } from '../../../redux/search/slice';
import { ContentContainer } from '../../shared/layout/Layout.Styled';
import GridList from '../../shared/list/GridList';
import UserItem from '../../shared/item/UserItem';
import InfiniteScroll from '../../shared/infiniteScroll';

function UsersContainer() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.users.results);

  const { query } = useParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) return;

    dispatch(ActionCreators.getSearchUsers({
      query, page,
    }));
  }, [dispatch, page]);

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
            {
                            (item) => <UserItem item={item} />
                        }
          </GridList>
        </InfiniteScroll>
      </ContentContainer>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Sentinel = styled.div`
  height: 100px;
  background: #fff;
`;

export default UsersContainer;
