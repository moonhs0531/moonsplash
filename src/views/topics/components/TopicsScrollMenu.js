import React from 'react';
import styled from 'styled-components';
import ScrollMenu from "../../shared/scrollMenu";
import {Link} from "react-router-dom";

function TopicsScrollMenu({data}) {

    // const renderItem = (item) => <NavLink>{item.title}</NavLink>

    return(
        <Container>
            <ScrollMenu data={data}>
                {(item) => (
                    <NavLink to={`/topics/${item.slug}`}>{item.title}</NavLink>
                )}
            </ScrollMenu>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  overflow:hidden;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #111111;
  height: 56px;
  padding: 0 12px;
  white-space: nowrap;
`;

export default TopicsScrollMenu;
