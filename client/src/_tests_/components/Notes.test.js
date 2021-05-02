import React from 'react';
import { shallow } from 'enzyme';
import Notes from '../../components/Notes';

describe('Notes', () => {
    it('should render Notes page', () => {
        const wrapper = shallow(<Notes />)
        expect(wrapper).toMatchSnapshot();
    })
})