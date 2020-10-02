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
  const refs = {
    0: React.createRef(), 1: React.createRef(), 2: React.createRef(), 3: React.createRef(), 4: React.createRef(), 5: React.createRef(), 6: React.createRef(), 7: React.createRef(), 8: React.createRef(), 9: React.createRef(), 10: React.createRef(), 11: React.createRef(),
  };

  it('should be able to render to the page', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = render(<MoreHouses places={testProps.currentSet} refs={refs} />);
    expect(wrapper).toBeDefined();
  });
  it('should be able to find slider content', () => {
    const wrapper = shallow(<MoreHouses places={testProps.currentSet} refs={refs} />);
    expect(wrapper.find('.SliderContent')).toExist();
  });
});
