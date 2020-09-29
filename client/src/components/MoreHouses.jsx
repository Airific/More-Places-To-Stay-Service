/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import House from './House';

// transform: translateX(-${(props) => props.translate}px);
// transform: translateX(-${allHouses})

function MoreHouses({ places, allHouses }) {
  const SliderContent = styled.div`
  position: absolute;
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
  `;
  const CardSlider = styled.div`
  flex: 2;
  position: relative;
  `;
  return (
    <CardSlider>
      <SliderContent className="SliderContent">
        {places.map((house, i) => <House house={house} key={i} />)}
      </SliderContent>
    </CardSlider>
  );
}

export default MoreHouses;
