/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { whiteHeart } from '../icons/images';

const Image = styled.img`
  height: 156px;
  width: 234px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px !important;
  margin-bottom: 10px !important;
  overflow: hidden;
  `;
const HouseContainer = styled.div`
  height: 250px;
  width: 100%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  margin-right: 20px;
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column
`;
const Icon = styled.img`
  display: flex;
  justify-content: flex-end;
  align self: flex-end;
  margin-top: 2px;
  margin-left: 2px;
  position: absolute;
`;

function House({ house }) {
  return (
    <HouseContainer>
      <Icon src={whiteHeart} />
      <Image src={house.image} alt="" />
      {house.title}
      <br />
      {house.description}
    </HouseContainer>
  );
}

export default House;
