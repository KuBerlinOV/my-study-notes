// import ReactShallowRenderer from 'react-test-renderer/shallow';

import React from 'react';
import { Header } from '../../components/Header';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';



// test('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();

//     console.log(renderer.getRenderOutput());
// })



describe('Header', () => {
    it('should render Header correctly', () => {
        const startLogoutSpy = jest.fn();
        const wrapper = mount(<BrowserRouter><Header startLogout={startLogoutSpy} /> </BrowserRouter>)
        expect(wrapper).toMatchSnapshot();
    })
    it('should call startLogout on button click', () => {
        const startLogoutSpy = jest.fn();
        const wrapper = mount(<BrowserRouter><Header startLogout={startLogoutSpy} /> </BrowserRouter>);
        wrapper.find('button').simulate('click');
        expect(startLogoutSpy).toHaveBeenCalled();
    })
})
