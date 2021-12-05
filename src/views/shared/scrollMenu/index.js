import React, {Fragment, useMemo, useRef, useState} from 'react';
import styled from 'styled-components';
import {IconShevronLeft, IconShevronRight} from "../../../icons";

function ScrollMenu({data, children}) {

    const trackRef = useRef();

    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);

    const handleScroll = (e) => {
        const {scrollWidth, clientWidth} = e.target;
        setScrollLeft(e.target.scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
    }

    const scrollToLeft = () => {
        trackRef.current.scrollLeft -= 300;
    }

    const scrollToLight = () => {
        trackRef.current.scrollLeft += 300;
    }

    const start = scrollLeft === 0;
    const end = scrollLeft === maxScroll;

    return useMemo( () => (
        <Container>
            {
                !start
                && (
                    <>
                        <Fog className="left"/>
                        <Arrow className="left" onClick={scrollToLeft}>
                            <IconShevronLeft/>
                        </Arrow>
                    </>
                )
            }

            <Track ref={trackRef} onScroll={handleScroll}>
            {
                data.map((item, index) => (
                    <Fragment key={item.title || index}>
                        {children(item)}
                    </Fragment>
                ))
            }
            </Track>

            {
                !end
                && (
                    <>
                        <Arrow className="right" onClick={scrollToLight}>
                            <IconShevronRight/>
                        </Arrow>
                        <Fog className="right"/>
                    </>
                )
            }
        </Container>
    ), [data, start, end])
}

const Container = styled.div`
  position: relative;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  
`;

const Fog = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  background-image: linear-gradient(270deg, #fff0 0, #fff 90%,#fff);
  pointer-events: none;
  
  &.left{
    left: 0;
  }
  
  &.right{
    right: 0;
    transform: rotate(180deg);
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 10px;
  
  &.left{
    left:0;
  }
  
  &.right{
    right:0;
  }
`;

export default ScrollMenu;
