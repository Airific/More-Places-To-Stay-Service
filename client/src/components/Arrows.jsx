/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { leftArrow, rightArrow } from '../icons/images';

const Arrow = ({ direction, handleClick }) => {
  const ArrowContainer = styled.button`
  display: flex;
  position: absolute;
  ${direction === 'right' ? 'right: 8px' : 'right: 52px'};
  height: 32px;
  width: 32px;
  top: 24%;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
  transition: transform ease-in 0.1s;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
  &:hover {
    transform: scale(1.1);
  }
  img {
    align: center;
    height: 10px;
    width: 10px;
    &:focus {
      outline: 0;
    }
  }
`;

  return (
    <ArrowContainer onClick={handleClick}>
      {direction === 'right' ? <img className="right" src={rightArrow} alt="" /> : <img className="left" src={leftArrow} alt="" />}
    </ArrowContainer>
  );
};

export default Arrow;
