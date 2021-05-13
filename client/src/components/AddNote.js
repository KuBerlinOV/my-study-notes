import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from '../actions/notes';
import NoteForm from './NoteForm';


export const AddNote = (props) => {

    return (
        <NoteForm
            handleSubmit={(note) => {
                props.startAddNote(note);
            }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddNote: (note) => dispatch(startAddNote(note))
})

export default connect(undefined, mapDispatchToProps)(AddNote);