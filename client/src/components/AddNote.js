import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from '../actions/notes';
import NoteForm from './NoteForm';


export const AddNote = ({ libraryId, startAddNote }) => {
    console.log(libraryId)
    return (

        <NoteForm
            libraryId={libraryId}
            handleSubmit={(note) => {
                startAddNote(note, libraryId);
            }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddNote: (note, libraryId) => dispatch(startAddNote(note, libraryId))
})

export default connect(undefined, mapDispatchToProps)(AddNote);