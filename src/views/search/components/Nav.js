import React from 'react';
import styled from 'styled-components';
import {Link, useParams} from "react-router-dom";

function Nav() {

    const {query} = useParams();

    return(
        <Container>
            <LavLink to={`/search/photos/${query}`}>photos</LavLink>
            <LavLink to={`/search/collections/${query}`}>collections</LavLink>
            <LavLink to={`/search/users/${query}`}>users</LavLink>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;


const LavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 20px;
`;


export default Nav;
