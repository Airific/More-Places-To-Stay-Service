/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import House from './House';

function MoreHouses({ places }) {
  const mapped = places.houses.map((house, i) => <House house={house} key={i} />);
  return (
    <div>
      {mapped}
    </div>
  );
}

export default MoreHouses;
