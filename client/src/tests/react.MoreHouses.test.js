/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { render, shallow } from 'enzyme';
import MoreHouses from '../components/MoreHouses';

describe('MoreHouses/Listings tests', () => {
  const testProps = {
    currentSet: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }],
    allHouses: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }, { index: 10 }, { index: 11 }],
  };

  it('should be able to render to the page', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = render(<MoreHouses places={testProps.currentSet} />);
    expect(wrapper).toBeDefined();
  });
  it('should be able to find slider content', () => {
    const wrapper = shallow(<MoreHouses places={testProps.currentSet} />);
    expect(wrapper.find('.SliderContent')).toExist();
  });
});
