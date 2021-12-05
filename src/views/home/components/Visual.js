import React from 'react';
import styled from 'styled-components';

import SearchBox from '../../shared/searchBox';

const Visual = () => (
  <Container>
    <Overlay />
    <Content>
      <h1>Unsplash</h1>
      <p>The internet’s source of freely-usable images.
        Powered by creators everywhere.</p>
      <SearchBox shape={"square"} />
      <Trending>
        Trending:
        <a href="/" className="hightlighter">flower</a>
        <a href="/" className="hightlighter">wallpapers</a>
        <a href="/" className="hightlighter">backgrounds</a>
        <a href="/" className="hightlighter">happy</a>
        <a href="/" className="hightlighter">love</a>
      </Trending>
    </Content>
  </Container>
);

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 520px;
  background: url('https://images.unsplash.com/photo-1635510239284-6f61d19c85f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80') 50% / cover no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
`;

const Content = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  color: #fff;
  
  h1{
    font-size: 46px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 22px;
  }
`;

const Trending = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

export default Visual;
