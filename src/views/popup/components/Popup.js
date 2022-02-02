import React from 'react';
import styled from 'styled-components';

import Contents from './Contents';

function Popup({ selectedId, onClose }) {
  return (
    <Container>
      <Track>
        <Contents selectedId={selectedId} />
      </Track>
      <Screen onClick={onClose} />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const Track = styled.div`
  position: relative;
  z-index: 100;
    width: 100%;
  max-width: 80vw;
  height: 90vh;
  overflow: auto;
  padding-top: 50px;
`;
const Screen = styled.div`
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
`;

export default Popup;
