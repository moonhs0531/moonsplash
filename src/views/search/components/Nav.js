import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { IconCollections, IconPhoto, IconUsers } from '../../../icons';

function Nav() {
  const { query, category } = useParams();

  const menu = [
    {
      name: 'photos',
      icon: <IconPhoto />,
    },
    {
      name: 'collections',
      icon: <IconCollections />,
    },
    {
      name: 'users',
      icon: <IconUsers />,
    },
  ];

  return (
    <Container>
      {
                menu.map(({ name, icon }) => (
                  <NavLink
                        className={cn({ isActive: category === name })}
                        to={`/search/${name}/${query}`}
                        key={name}
                  >
                    {icon}
                    {name}
                  </NavLink>
                ))

            }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  width: 100%;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 20px;
  color: #d1d1d1;
  margin-left: 16px;
  font-size: 14px;
  transition: 0.3s;

  &.isActive {
    border-bottom: 3px solid #111;
    color: #111;
    font-weight: bold;
    
    svg{
      fill: #111;
    }
  }
  
  svg{
    width: 20px;
    height: 20px;
    fill: #d1d1d1;
    margin-right: 6px;
  }
`;

export default Nav;
