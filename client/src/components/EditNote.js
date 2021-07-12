import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startUpdateNote } from '../actions/notes';


export const EditNote = (props) => {
    return (
        <main className='editnote-page'>
            <NoteForm
                //note before update
                note={props.note}
                //this is handle submit props
                handleSubmit={(note) => {
                    //dispatch action to edit the expense
                    props.startUpdateNote(props.note.id, note);
                    //redirect to dashBoard
                    props.history.push('/notes')
                }}
            />
        </main>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startUpdateNote: (id, note) => dispatch(startUpdateNote(id, note))
})

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note) => note.id == props.match.params.id)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);