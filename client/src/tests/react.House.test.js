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
  const refs = {
    0: React.createRef(), 1: React.createRef(), 2: React.createRef(), 3: React.createRef(), 4: React.createRef(), 5: React.createRef(), 6: React.createRef(), 7: React.createRef(), 8: React.createRef(), 9: React.createRef(), 10: React.createRef(), 11: React.createRef(),
  };

  it('should be able to render to the page', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = render(<House house={testProps} refs={refs} />);
    expect(wrapper).toBeDefined();
  });
  it('should render images to the page', () => {
    const wrapper = shallow(<House house={testProps} refs={refs} />);
    expect(wrapper.find('.Image')).toBeDefined();
  });
  it('should not only find one of each selector', () => {
    const wrapper = mount(<House house={testProps} refs={refs} />);
    expect(wrapper).not.toContainExactlyOneMatchingElement('Reviews');
  });
});
