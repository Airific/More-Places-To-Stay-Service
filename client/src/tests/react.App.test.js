/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

describe('More Places to Stay Component', () => {
  it('allows us to check for certain props', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = mount(<App />);
    expect(wrapper).toContainReact(<h2 tabIndex="-1">More places to stay</h2>);
    // eslint-disable-next-line react/jsx-no-undef
    expect(wrapper).not.toContainReact(<div>Random Div</div>);
  });
});
