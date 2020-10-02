/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { mount, render } from 'enzyme';
import App from '../components/App';

describe('App tests', () => {
  const testProps = {
    currentSet: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }],
    allHouses: [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }, { index: 10 }, { index: 11 }],
    page: 1,
    refs: {
      0: React.createRef(), 1: React.createRef(), 2: React.createRef(), 3: React.createRef(), 4: React.createRef(), 5: React.createRef(), 6: React.createRef(), 7: React.createRef(), 8: React.createRef(), 9: React.createRef(), 10: React.createRef(), 11: React.createRef(),
    },
  };

  it('allows us to check for certain elements', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<App />);
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });
  it('should be able to render', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeDefined();
  });
  it('should have certain properties in state', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState('allHouses');
    expect(wrapper).toHaveState('page');
  });
  // it('should go to next set of houses when clicking on right button', () => {
  //   const wrapper = mount(<App />);
  //   wrapper.setState({
  //     currentSet: testProps.currentSet, allHouses: testProps.allHouses,
  //   });
  //   const nextButton = wrapper.find('button');
  //   nextButton.find('.right').simulate('click');
  //   expect(wrapper.state().page).toBe(2);
  // });
  // it('should go to loop to the back set of houses when clicking on left button', () => {
  //   const wrapper = mount(<App />);
  //   wrapper.setState({
  //     currentSet: testProps.currentSet, allHouses: testProps.allHouses, page: testProps.page,
  //   });
  //   const nextButton = wrapper.find('button');
  //   nextButton.find('.left').simulate('click');
  //   expect(wrapper.state().page).toBe(3);
  // });
  it('should know that no house comes in saved by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('isSaved')).toEqual(false);
  });
  it('does not render an empty component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeEmptyRender();
  });
  it('has correct render content', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('span')).not.toExist();
    expect(wrapper.find('ul')).not.toExist();
  });
  it('contains correct selectors', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainMatchingElement('.ContainerApp');
    expect(wrapper).toContainMatchingElement('.Title');
    expect(wrapper).not.toContainMatchingElement('#Random');
  });
  it('given wrapper contains a given number of matches for the given selector', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainMatchingElements(2, 'Arrow');
    expect(wrapper).toContainMatchingElements(2, '.Header');
  });
  it('should not only find one of each selector', () => {
    const wrapper = mount(<App />);
    expect(wrapper).not.toContainExactlyOneMatchingElement('Arrow');
  });
});
