import React from 'react';
import { mount } from 'enzyme';
import { Note } from '../../components/Note';
import notes from '../fixtures/notes'
import Modal from 'react-modal';
//testing react modal => https://remarkablemark.org/blog/2017/05/17/testing-react-modal/

let wrapper, handleModalSpy, updateStatusSpy;

beforeEach(() => {
    handleModalSpy = jest.fn();
    updateStatusSpy = jest.fn();
    wrapper = mount(<Note updateStatus={updateStatusSpy} {...notes[0]} />);
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
    it('renders react-modal', () => {
        expect(wrapper.find(Modal)).toHaveLength(1);
        expect(wrapper.find(Modal).prop('isOpen')).toBe(false);
    });
    it('opens modal', () => {
        wrapper.find('button').at(1).simulate('click')
        expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    })
    it('should call update note with correct id', () => {
        wrapper.find('button').at(0).simulate('click')
        expect(updateStatusSpy).toHaveBeenCalledWith(notes[0].id)
    })
})