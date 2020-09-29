/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 234px;
  width: 351px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px !important;
  margin-bottom: 10px !important;
  `;
const HouseContainer = styled.div`
  height: 100;
  width: 100%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  flex: 2;
`;

function House({ house }) {
  return (
    <HouseContainer>
      <Image src={house.image} alt="" />
      {house.title}
      <br />
      {house.description}
    </HouseContainer>
  );
}

export default House;
