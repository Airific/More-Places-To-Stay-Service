/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import House from './House';

// transform: translateX(-${(props) => props.translate}px);
// transform: translateX(-${allHouses})
const SliderContent = styled.div`
position: absolute;
height: 250px;
width: 1118px;
display: flex;
// border: 1px solid red;
align-items: center;
overflow: auto hidden;
`;
const CardSlider = styled.div`
position: relative;
`;

function MoreHouses({
  places, saveClick, isSaved, refs, handleShowModal,
}) {
  return (
    <CardSlider>
      <SliderContent className="SliderContent">
        {places.map((house) => <House handleShowModal={handleShowModal} house={house} key={house.index} refs={refs} />)}
      </SliderContent>
    </CardSlider>
  );
}

export default MoreHouses;
