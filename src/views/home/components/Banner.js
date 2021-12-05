import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = () => (
  <Container to="/">
    <h2>Unsplash Awards</h2>
    <p>Now accepting submissions to the 5edtion of the Unsplash Awards. Lean more</p>
  </Container>
);

const Container = styled(Link)`
  display: block;
  padding: 40px 20px;
  text-align: center;
  background: #555 url('https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80') 50% / cover no-repeat;
  margin-top: 50px;
  
  h2{
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  p{
    font-size: 18px;
    color: #fff;
    opacity: .6;
  }
`;

export default Banner;
