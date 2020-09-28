/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import House from './House';

function MoreHouses({ places }) {
  const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
  `;
  const mapped = places.houses.map((house, i) => <House house={house} key={i} />);
  return (
    <SliderContent>
      {mapped}
    </SliderContent>
  );
}

export default MoreHouses;
