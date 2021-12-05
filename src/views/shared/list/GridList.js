import React from 'react';
import styled from 'styled-components';

function GridList({data, children}) {

    return(
        <Container>
            <Row>
            {
                data.map((item) => (
                    <Col>
                        {children(item)}
                    </Col>
                ))
            }
            </Row>
        </Container>
    )
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
  margin-bottom: 20px;
  &:last-child{
    padding-right: 0;
  }
`;

export default GridList;
