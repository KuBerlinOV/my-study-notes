// import ReactShallowRenderer from 'react-test-renderer/shallow';

import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Header } from '../../components/Header';

const history = createBrowserHistory();



// test('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();

//     console.log(renderer.getRenderOutput());
// })



describe('Header', () => {
    it('should render Header correctly', () => {
        const startLogoutSpy = jest.fn();
        const wrapper = mount(<Router history={history}> <div><Header startLogout={startLogoutSpy} /></div></Router>)
        expect(wrapper).toMatchSnapshot();
    })
    it('should call startLogout on button click', () => {
        const startLogoutSpy = jest.fn();
        const wrapper = mount(<Router history={history} ><Header startLogout={startLogoutSpy} /> </Router>);
        wrapper.find('button').simulate('click');
        expect(startLogoutSpy).toHaveBeenCalled();
    })
})
