import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import PhotoItem from '../item/PhotoItem';
import { chunkPhotos } from '../../../lib/photos';
import { ActionCreators } from '../../../redux/popup/slice';

function PhotoList({ data = [] }) {
  const photoGroups = chunkPhotos(data);
  const dispatch = useDispatch();

  const openPopup = (id) => {
    console.log('@@id?', id);
    dispatch(ActionCreators.openPopup(id));
    dispatch(ActionCreators.updateState({ selectedId: id }));
    window.history.pushState(null, null, `/photos/${id}`);
  };
  return (
    <Container>
      <Row>
        {
              photoGroups.map((group, index) => (
                <Col key={index}>
                  {
                          group.map((item) => (
                            <ItemWrapper key={item.id}>
                              <PhotoItem
item={item}
onClick={() => openPopup(item.id)}
                              />
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
