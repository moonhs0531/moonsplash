import React from 'react';
import styled from 'styled-components';

import PhotoItem from '../item/PhotoItem';
import {chunkPhotos} from "../../../lib/photos";

function PhotoList({ data = []}) {
    const photoGroups = chunkPhotos(data);
  return (
    <Container>
      <Row>
          {
              photoGroups.map((group, index) => (
                  <Col key={index}>
                      {
                          group.map((item) => (
                              <ItemWrapper key={item.id}>
                                  <PhotoItem item={item} />
                              </ItemWrapper>
                          ))
                      }
                  </Col>
              ))
          }
      </Row>

    </Container>
  );
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.3%;
  padding: 0 10px;
`;

const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;

export default PhotoList;
