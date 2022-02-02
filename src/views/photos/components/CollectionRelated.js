import React from 'react';
import styled from 'styled-components';

import GridList from '../../shared/list/GridList';
import CollectionItem from '../../shared/item/CollectionItem';

function CollectionRelated({ data }) {
  return (
    <Container>
      <GridList data={data}>
        {(item) => <CollectionItem item={item} />}
      </GridList>
    </Container>
  );
}

const Container = styled.div`

`;

export default CollectionRelated;
