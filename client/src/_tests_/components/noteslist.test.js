import React from 'react';
import { shallow } from 'enzyme';
import { NotesList } from '../../components/NotesList';
import notes from '../fixtures/notes';
//solving an empty shallowrapper https://backbencher.dev/blog/empty-shallowwrapper-snapshot-jest-enzyme

describe('NotesList', () => {
    it('should render NotesList', () => {
        const wrapper = shallow(<NotesList notes={notes} />)
        expect(wrapper).toMatchSnapshot();
    })
    it('should render paragraph', () => {
        const wrapper = shallow(<NotesList notes={[]} />);
        expect(wrapper).toMatchSnapshot();
    })
})