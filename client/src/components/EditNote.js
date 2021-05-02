import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { updateNote } from '../actions/notes';


export const EditNote = (props) => {
    return (
        <div>
            <NoteForm
                //note before update
                note={props.note}
                //this is handle submit props
                handleSubmit={(note) => {
                    //dispatch action to edit the expense
                    props.editNote(props.note.id, note);
                    //redirect to dashBoard
                    props.history.push('/notes')
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    editNote: (id, note) => dispatch(updateNote(id, note))
})

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note) => note.id == props.match.params.id)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);