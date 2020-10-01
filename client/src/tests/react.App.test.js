/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { mount, render } from 'enzyme';
import App from '../components/App';

describe('App tests', () => {
  const testProps = {
    currentSet: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }],
    allHouses: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }, { index: 10 }, { index: 11 }],
  };

  it('allows us to check for certain props', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<App />);
    expect(wrapper).toContainReact(<h2 tabIndex="-1">More places to stay</h2>);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });
  it('should be able to render', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeDefined();
  });
  it('should have allHouses in state', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState('allHouses');
    expect(wrapper).toHaveState('currentSet');
  });
  it('should go to next set of houses when clicking on right button', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      currentSet: testProps.currentSet, allHouses: testProps.allHouses,
    });
    const nextButton = wrapper.find('button');
    nextButton.find('.right').simulate('click');
    expect(wrapper.state().currentSet[0].index).toBe(4);
    expect(wrapper.state().currentSet[3].index).toBe(7);
  });
  it('should go to loop to the back set of houses when clicking on left button', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      currentSet: testProps.currentSet, allHouses: testProps.allHouses,
    });
    const nextButton = wrapper.find('button');
    nextButton.find('.left').simulate('click');
    expect(wrapper.state().currentSet[0].index).toBe(8);
    expect(wrapper.state().currentSet[3].index).toBe(11);
  });
});
