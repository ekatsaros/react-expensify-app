//How to virtually render our component
// React library - react - test - renderer to test virtually the component

import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRender from 'react-test-renderer/shallow';
//import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
//react-test-renderer

test('should render Header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot(); 
	//expect(toJSON(wrapper)).toMatchSnapshot(); //create snapshot based off of enzyme wrapper
	//expect(wrapper.find('h1').text()).toBe('Expensify');
	

	// const renderer = new ReactShallowRender();
	// renderer.render(<Header />); //output we are trying to test
	// expect(renderer.getRenderOutput()).toMatchSnapshot();

});
