import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ScrollMenu from '../../shared/scrollMenu';

function SearchScrollMenu({ data = [] }) {
  return (
    <Container>
      <ScrollMenu data={data}>
        {(item) => (
          <NavLink to={`/search/photos/${item.title}`}>{item.title}</NavLink>
        )}
      </ScrollMenu>
    </Container>
  );
}

const Container = styled.div`

`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  height: 40px;
  white-space: nowrap;
  margin: 0 8px;
  min-width: 143px;
  padding: 0 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchScrollMenu;
