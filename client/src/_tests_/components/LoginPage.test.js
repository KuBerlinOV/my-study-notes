import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

describe('LoginPage', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper).toMatchSnapshot()
    })
    it('should call login button on button click', () => {
        const startLoginSpy = jest.fn();
        const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
        wrapper.find('button').simulate('click');
        expect(startLoginSpy).toHaveBeenCalled();
    })
})

