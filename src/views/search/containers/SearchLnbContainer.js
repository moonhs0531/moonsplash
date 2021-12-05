import React from 'react';
import styled from 'styled-components';

import Filter from "../components/Filter";
import Nav from "../components/Nav";

function SearchLnbContainer() {

    
    return(
        <Container>
            <Nav/>
            <Filter/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default SearchLnbContainer;
