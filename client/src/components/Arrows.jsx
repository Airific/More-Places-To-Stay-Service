import React from 'react';
import styled from 'styled-components';
import { leftArrow, rightArrow } from '../icons/images';

const Arrow = ({ direction, handleClick, next }) => {
  const ArrowContainer = styled.button`
  display: flex;
  position: absolute;
  ${direction === 'right' ? 'right: 100px' : 'right: 125px'};
  height: 20px;
  width: 20px;
  top: 32%;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
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
