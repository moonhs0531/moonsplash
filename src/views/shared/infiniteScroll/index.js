import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useInViewport } from '../../../hocks/useInViewport';

const InfiniteScroll = ({ children, next, length }) => {
  if (length === undefined) {
    throw new Error('length property is required');
  }

  const [sentinelRef, isInView] = useInViewport();

  useEffect(() => {
    if (isInView && length > 0) {
      next?.();
    }
  }, [isInView]);

  return (
    <>
      {children}
      <Sentinel ref={sentinelRef}>
        ...loading
      </Sentinel>
    </>
  );
};

const Sentinel = styled.div`
    height: 40px;
`;

export default InfiniteScroll;
