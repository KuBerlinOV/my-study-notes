import React from 'react';
import { mount, shallow } from 'enzyme';
import { EditNote } from '../../components/EditNote';
import notes from '../fixtures/notes';

let wrapper, editNoteSpy, historySpy;

beforeEach(() => {
    editNoteSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = mount(<EditNote note={notes[0]} editNote={editNoteSpy} history={historySpy} />);
})

describe('EditNote', () => {


    it('should render EditNote correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should handle submit', () => {
        //interestingly I had troubles with passing this test because NoteForm props, which passed the data of the note 
        //from EditNote page where the state is dispatched, was named as 'noteBeforeUpdate' and not just 'note'.
        //for the future is always important to have the similar name
        wrapper.find('NoteForm').prop('handleSubmit')(notes[0])//<- I grabed the handleSubmit props and called it with the note object
        expect(historySpy.push).toHaveBeenLastCalledWith('/notes')
        expect(editNoteSpy).toHaveBeenCalledWith(notes[0].id, notes[0])
    })
})