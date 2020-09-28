/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 200px;
  width: 200px;
`;
// const HouseContainer = styled.div`
//   display: flex;
// `;

function House({ house }) {
  return (
    <div>
      <Image src={house.image} alt="" />
      {`${house.title}
      ${house.description} `}
    </div>
  );
}

export default House;
