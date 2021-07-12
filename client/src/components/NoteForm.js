import React, { useState } from 'react';
import moment from 'moment';

//moment 
// const now = moment().format('MMMM Do YYYY, h:mm:ss a');
//props.noteBeforeUpdate ? moment(props.noteBeforeUpdate.createdAt) :

const NoteForm = (props) => {


    //local states
    const [state, setState] = useState({
        topic: props.note ? props.note.topic : '',
        text: props.note ? props.note.text : '',
        reference: props.note ? props.note.reference : '',
        tag: props.note ? props.note.tag : '',
        createdAt: props.note ? props.note.createdAt : moment().format(),
        libraryId: props.note ? props.note.libraryId : props.libraryId,
        error: ''
    });


    const handleChange = (e) => {
        setState({
            ...state,
            //this is the name of the element that we are targeting, depending on which input element
            //
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        if (!state.topic) {
            setState({ error: 'Please provide topic and description' })
        } else {
            setState({ error: '' })
            //this is the props with the local state.
            //This local state then passed with the props
            // to notes component where the action 'ADD_NOTE' is dispatched with this local state of the noteform
            props.handleSubmit(state)
            if (props.handleModal) {
                return props.handleModal()
            }
        }
        e.preventDefault();
    }
    //explanation why this value={state.topic || ''} was needed https://stackoverflow.com/questions/44312437/react-router-v4-this-props-history-push-not-working
    return (
        <form className='note-form' onSubmit={handleSubmit} data-testid="form" action="">
            {props.note ? <h2>Edit Note</h2> : <h2>Create Note</h2>}
            <label>Topic:</label>
            <input className='input' type="text" placeholder="topic" name="topic" autoFocus value={state.topic || ''} onChange={handleChange} />
            <label>Note</label>
            <textarea className='input textarea' placeholder="write your note here" name="text" id="" cols="30" rows="10" value={state.text || ''} onChange={handleChange} ></textarea>
            <label>Reference</label>
            <input className='input' type="text" placeholder="reference" name="reference" id="" value={state.reference || ''} onChange={handleChange} />
            <label>Tag</label>
            <input className='input' type="text" placeholder="tag" name="tag" value={state.tag || ''} onChange={handleChange} />

            <div className='btn-container'>
                {state.error && <p className='text-sub'>{state.error}</p>}
                <button className='btn-lg' >Save</button>
            </div>
        </form>
    )
}



export default NoteForm