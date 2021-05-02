import React from 'react';
import NoteForm from '../../components/NoteForm';
import notes from '../fixtures/notes';
import { render, fireEvent } from '@testing-library/react';

//Example of testing using enzyme
// describe('NoteForm', () => {
//     it('should render NoteForm correctly', () => {
//         const wrapper = shallow(<NoteForm />)
//         expect(wrapper).toMatchSnapshot();
//     })
//     it('should render NoteForm with a note data correctly', () => {
//         const wrapper = shallow(<NoteForm noteBeforeUpdate={notes[0]} />)
//         expect(wrapper).toMatchSnapshot();
//     })
//     it('should render error for invalid form submission', () => {
//         const wrapper = shallow(<NoteForm />)
//         expect(wrapper).toMatchSnapshot()
//         wrapper.find('form').simulate('submit', {
//             preventDefault: () => { }
//         });
//         expect(wrapper.find('p').text()).toBe('Please provide topic and description') //<-- because when using useState hook, I cannot access the state by
//         expect(wrapper).toMatchSnapshot()                                             // using wrapper.state to test if it's changes, instead I am asserting that the <p> element
//     })                                                                                // is rendered with the correct text
//     it('should set topic on input change', () => {
//         const wrapper = shallow(<NoteForm />);
//         wrapper.find('input').at(0).simulate('change', {
//             target: { value: 'new topic' }
//         })
//         expect(wrapper).toMatchSnapshot()
//         expect(wrapper.find('input').at(0).prop('value')).toEqual('new topic');
//     })
// })

describe("NoteForm", () => {
    it('should render NoteForm correctly', () => {
        const { container } = render(<NoteForm />)
        expect(container).toMatchSnapshot()
    });
    it('should render NoteForm with a note data correctly', () => {
        const { container } = render(<NoteForm note={notes[0]} />)
        expect(container).toMatchSnapshot();
    });
    it('should render error for invalid form submission', () => {
        const { container, getByTestId, getByText } = render(<NoteForm />);
        expect(container).toMatchSnapshot();
        fireEvent.submit(getByTestId('form'));
        expect(getByText('Please provide topic and description')).toBeInTheDocument(); // here we using get by text in order to make sure that the error state was updated as the error string was rendered after empty form submit
        // expect(container.find('p').text()).toBe('Please provide topic and description');
        expect(container).toMatchSnapshot();
    })
    it('should update topic input value on change', () => {
        const { container, queryByPlaceholderText } = render(<NoteForm />)

        const topicInput = queryByPlaceholderText('topic');
        fireEvent.change(topicInput, { target: { value: 'new topic' } });
        expect(topicInput.value).toBe('new topic')
        expect(container).toMatchSnapshot();
    });
    it('should update description input value on change', () => {
        const { container, queryByPlaceholderText } = render(<NoteForm />)

        const descriptionInput = queryByPlaceholderText('description');
        fireEvent.change(descriptionInput, { target: { value: 'new description' } });
        expect(descriptionInput.value).toBe('new description')
        expect(container).toMatchSnapshot();
    });
    it('should update note input value on change', () => {
        const { container, queryByPlaceholderText } = render(<NoteForm />)

        const noteInput = queryByPlaceholderText('write your note here');
        fireEvent.change(noteInput, { target: { value: 'new note' } });
        expect(noteInput.value).toBe('new note')
        expect(container).toMatchSnapshot();
    });
    it('should update reference input value on change', () => {
        const { container, queryByPlaceholderText } = render(<NoteForm />)

        const referenceInput = queryByPlaceholderText('reference');
        fireEvent.change(referenceInput, { target: { value: 'new reference' } });
        expect(referenceInput.value).toBe('new reference')
        expect(container).toMatchSnapshot();
    });
    it('should update tag input value on change', () => {
        const { container, queryByPlaceholderText } = render(<NoteForm />)

        const tagInput = queryByPlaceholderText('tag');
        fireEvent.change(tagInput, { target: { value: 'new tag' } });
        expect(tagInput.value).toBe('new tag')
        expect(container).toMatchSnapshot();
    });
    it('should call handleSubmit props with the local state object for valid submission', () => {
        const handleSubmitSpy = jest.fn();
        const { container, getByTestId } = render(
            <NoteForm note={notes[2]} handleSubmit={handleSubmitSpy}
            />)
        fireEvent.submit(getByTestId('form'));
        expect(handleSubmitSpy).toHaveBeenLastCalledWith({
            topic: notes[2].topic,
            description: notes[2].description,
            note: notes[2].note,
            reference: notes[2].reference,
            tag: notes[2].tag,
            createdAt: notes[2].createdAt,
            error: ''
        })
    })
})