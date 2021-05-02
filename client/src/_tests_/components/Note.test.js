import React from 'react';
import { mount } from 'enzyme';
import { Note } from '../../components/Note';
import notes from '../fixtures/notes'


let wrapper, removeNoteSpy, updateStatusSpy;

beforeEach(() => {
    removeNoteSpy = jest.fn();
    updateStatusSpy = jest.fn();
    wrapper = mount(<Note removeNote={removeNoteSpy} updateStatus={updateStatusSpy} {...notes[0]} />);
})

describe('Note', () => {
    it('should render Note', () => {
        // const wrapper = mount(<Note {...notes[0]}
        // // topic={notes[0].topic}
        // // description={notes[0].description}
        // // note={notes[0].note}
        // // reference={notes[0].reference}
        // // tag={notes[0].tag}
        // // createdAt={notes[0].createdAt}
        // // id={notes[0].id}
        // // status={notes[0].status}
        // />)
        expect(wrapper).toMatchSnapshot();
    })
    it('should call remove note with correct id', () => {
        wrapper.find('button').at(1).simulate('click')
        expect(removeNoteSpy).toHaveBeenCalledWith(notes[0].id)
    })
    it('should call update note with correct id', () => {
        wrapper.find('button').at(0).simulate('click')
        expect(updateStatusSpy).toHaveBeenCalledWith(notes[0].id)
    })
})