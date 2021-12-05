import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Container>
        <NavLink to="/">Brands</NavLink>
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/">Blog</NavLink>
        <Bar />
        <NavLink to="/">Log in</NavLink>
        <NavLink to="/">
            <p>Submit a Photo</p>
        </NavLink>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  width: 1px;
  height: 100%;
  background: #ddd;
`;

const NavLink = styled(Link)`
  padding: 20px 12px;
  font-size: 14px;
  color: #767676;
  
  &:last-child p{
    padding: 4px 11px;
    border: 1px solid #d1d1d1;
  }
`;

export default Nav;
