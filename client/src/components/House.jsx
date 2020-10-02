/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { whiteHeart, redheart } from '../icons/images';

const Image = styled.img`
  height: 176px;
  width: 263px;
  background-size: cover;
  background-position: center;
  border-radius: 12px !important;
  margin-bottom: 10px !important;
  overflow: hidden;
  `;
const HouseContainer = styled.div`
  height: 250px;
  border: 1px solid white;
  border-width: 0 8px;
  width: 240px;
  max-width: 263px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
`;
const Heart = styled.div`
  display: flex;
  justify-content: flex-end;
  align self: flex-end;
  padding-top: 5px;
  padding-left: 238px;
  position: absolute;
  height: 21px;
  width: 18px;
  fill: rgba(0, 0, 0, 0.5);
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
`;
const Superhost = styled.div`
  position: absolute;
  background: white;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(34, 34, 34);
  font-weight: 550 !important;
  font-size: 12px !important;
  border-radius: 5px;
  overflow: auto hidden !important;
  padding: 5px !important;
  margin-left: 5px !important;
  margin-top: 5px !important;
`;
const Reviews = styled.div`
  display: flex;
  margin-bottom: 0;
`;
const Price = styled.span`
  font-weight: 800 !important;
`;

function House({ house, saveClick, isSaved, refs }) {
  return (
    <HouseContainer className="HouseContainer" ref={refs[house.index]}>
      {house.superhost ? <Superhost>SUPERHOST</Superhost> : null}
      <Heart className="Heart" onClick={() => { saveClick(); }}>
        <svg viewBox="0 0 32 32" focusable="false" style={{ display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
      </Heart>
      <Image className="Image" src={house.image} alt="" />
      <Reviews className="Reviews">
        <svg viewBox="0 0 1000 1000" focusable="false" style={{ height: '14px', width: '14px', fill: '#FF385D' }}><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
        {`${house.rating} (${house.reviews})`}
      </Reviews>
      {house.title}
      <br />
      {house.description}
      <br />
      <div>
        <Price className="Price">
          $
          {house.price}
        </Price>
        <span> / night</span>
      </div>
    </HouseContainer>
  );
}

export default House;
