import React from 'react';
import styled from 'styled-components';
import { leftArrow, rightArrow } from '../icons/images';

const Arrow = ({ direction, handleClick, next }) => {
  const ArrowContainer = styled.button`
  display: flex;
  position: absolute;
  top: 6%;
  left: 1200px;
  ${direction === 'right' ? `right: 1200px` : `left: 1180px`};
  height: 20px;
  width: 20px;
  justify-content: flex-end;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    align: center;
    height: 8px;
    width: 8px;
    &:focus {
      outline: 0;
    }
  }
`;

  return (
    <ArrowContainer onClick={handleClick} disabled={next}>
      {direction === 'right' ? <img src={rightArrow} alt="" /> : <img src={leftArrow} alt="" />}
    </ArrowContainer>
  );
};

export default Arrow;
