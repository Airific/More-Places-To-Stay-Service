/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { render, shallow } from 'enzyme';
import House from '../components/House';

describe('MoreHouses/Listings tests', () => {
  const testProps = {
    house: {
      description: 'Licensed place to stay',
      image: 'test',
      index: 0,
      price: 144,
      rating: 4.15,
      reviews: 23,
      superhost: false,
      title: 'Entire guesthouse · 2 beds',
    },
  };

  it('should be able to render to the page', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = render(<House house={testProps} />);
    expect(wrapper).toBeDefined();
  });
  it('should render images to the page', () => {
    const wrapper = shallow(<House house={testProps} />);
    expect(wrapper.find('Image')).toBeDefined();
  });
});
