import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addNote } from '../actions/notes';
import NoteForm from './NoteForm';

export const AddNote = (props) => {

    return (
        <NoteForm
            handleSubmit={(note) => {
                props.addNote(note);
                props.history.push('/notes');
            }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    addNote: (note) => dispatch(addNote(note))
})

export default connect(undefined, mapDispatchToProps)(AddNote);