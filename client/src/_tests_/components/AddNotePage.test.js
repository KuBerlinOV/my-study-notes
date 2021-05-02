import React from 'react';
import { shallow } from 'enzyme';
import { AddNote } from '../../components/AddNote';
import notes from '../fixtures/notes';
import { render } from '@testing-library/react';

let addNoteSpy, historySpy, wrapper;

beforeEach(() => {
    addNoteSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddNote addNote={addNoteSpy} history={historySpy} />);
})


describe('AddNote', () => {
    it('should render AddNote correctly', () => {
        const { container } = render(<AddNote addNote={addNoteSpy} history={historySpy} />);
        expect(container).toMatchSnapshot();
    })
    //in this test enzyme is used in order to access the handleSubmit prop of the functional component
    //and test if the handleSubmit prop (function created in the NoteForm component) is passing down
    // the note object to dispatched addNote action
    it('should handle submit', () => {
        wrapper.find('NoteForm').prop('handleSubmit')(notes[1]) //<- I grabed the handleSubmit props and called it with the note object
        expect(historySpy.push).toHaveBeenLastCalledWith('/notes')
        expect(addNoteSpy).toHaveBeenLastCalledWith(notes[1])
    })
})