// import ReactShallowRenderer from 'react-test-renderer/shallow';

import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';



// test('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();

//     console.log(renderer.getRenderOutput());
// })

describe('Header', () => {
    it('should render Header correctly', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot();
    })
})
