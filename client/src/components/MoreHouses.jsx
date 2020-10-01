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
    height: 250px;
    width: 1000px;
    display: flex;
    border: 1px solid red;
    margin: auto;
    justify-content: center;
    align-items: center;
    `;
  const CardSlider = styled.div`
    position: relative;
    overflow: hidden:
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
