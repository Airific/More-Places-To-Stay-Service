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
  border: 1px solid black;
  width: 240px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  margin-right: 15px;
  display: flex;
  flex-direction: column
`;
const Icon = styled.img`
  display: flex;
  justify-content: flex-end;
  align self: flex-end;
  margin-top: 2px;
  margin-left: 210px;
  position: absolute;
  height: 21px;
  width: 18px;
  fill: rgba(0, 0, 0, 0.5);
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
`;

function House({ house }) {
  return (
    <HouseContainer>
      <Icon src={whiteHeart} />
      <Image src={house.image} alt="" />
      {`${house.rating} (${house.reviews})`}
      <br />
      {house.title}
      <br />
      {house.description}
      <br />
      {`$${house.price} / night`}
    </HouseContainer>
  );
}

export default House;
