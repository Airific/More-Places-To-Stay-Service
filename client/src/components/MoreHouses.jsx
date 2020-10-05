/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import House from './House';

const SliderContent = styled.div`
position: absolute;
height: 260px;
width: 1118px;
display: flex;
// border: 1px solid red;
overflow: auto hidden;
`;
const CardSlider = styled.div`
position: absolute;
height: 250px;
width: 1118px;
overflow: hidden;
`;

function MoreHouses({
  places, refs, placesCount, incrementCount, decrementCount,
}) {
  return (
    <CardSlider className="CardSlider">
      <SliderContent className="SliderContent">
        {places.map((house) => <House house={house} incrementCount={incrementCount} decrementCount={decrementCount} placesCount={placesCount} key={house.index} refs={refs} />)}
      </SliderContent>
    </CardSlider>
  );
}

export default MoreHouses;
