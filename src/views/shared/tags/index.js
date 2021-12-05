import React from 'react';
import styled from 'styled-components';

function Tags({data}) {
    const _data = data.slice(0, 3);
    return(
        <Container>
            {
                _data.map((tag) => <Tag key={tag.title}>{tag.title}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 0 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  background: #eee;
  color: #777;
  font-size: 14px;
  text-transform: capitalize;
`;

export default Tags;
