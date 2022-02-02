import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

function Filter() {
  const { query } = useParams();
  const location = useLocation();
  const qsParams = qs.parse(location.search, { ignoreQueryPrefix: true });

  const colors = [
    'black_and_white',
    'black',
    'white',
    'yellow',
    'orange',
    'red',
    'purple',
    'magenta',
    'green',
    'teal',
    'blue',
  ];

  const orientation = ['landscape', 'portrait', 'squarish'];

  return (
    <Container>
      <OrientationBox>
        {
                    orientation.map((item) => (
                      <Link to={`${query}?${qs.stringify({
                        ...qsParams,
                        orientation: item,
                      })}`}
                      >
                        <OrientationItem>
                          {item}
                        </OrientationItem>
                      </Link>
                    ))
                }
      </OrientationBox>

      <ColorBox>
        {
                colors.map((item) => (
                  <Link to={`${query}?${qs.stringify({
                    ...qsParams,
                    color: item,
                  })}`}
                  >
                    <ColorItem className={item} />
                  </Link>
                ))
            }
      </ColorBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const OrientationBox = styled.div`
`;

const OrientationItem = styled.div`
    
`;

const ColorBox = styled.div`
  display: flex;
`;
const ColorItem = styled.div`
  width: 24px;
  height: 24px;
  background: #ddd;
  border-radius: 50%;
  margin: 0 5px;
  box-shadow: 0 0 3px #000;

  &.black_and_white{
    background-color: grey;
  }
  &.black{
    background-color: black;
  }
  &.white{
    background-color: white;
  }
  &.yellow{
    background-color: yellow;
  }
  &.orange{
    background-color: orange;
  }
  &.red{
    background-color: red;
  }
  &.purple{
    background-color: purple;
  }
  &.magenta{
    background-color: magenta;
  }
  &.green{
    background-color: green;
  }
  &.teal{
    background-color: teal;
  }
  &.blue{
    background-color: blue;
  }
`;

export default Filter;
