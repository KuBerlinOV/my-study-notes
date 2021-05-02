import React, { useState } from 'react';
import moment from 'moment';

//moment 
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
//props.noteBeforeUpdate ? moment(props.noteBeforeUpdate.createdAt) :

const NoteForm = (props) => {


    //local states
    const [state, setState] = useState({
        topic: props.note ? props.note.topic : '',
        description: props.note ? props.note.description : '',
        note: props.note ? props.note.note : '',
        reference: props.note ? props.note.reference : '',
        tag: props.note ? props.note.tag : '',
        createdAt: props.note ? props.note.createdAt : moment(),
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
        if (!state.topic || !state.description) {
            setState({ error: 'Please provide topic and description' })
        } else {
            setState({ error: '' })
            //this is the props with the local state.
            //This local state then passed with the props
            // to notes component where the action 'ADD_NOTE' is dispatched with this local state of the noteform
            props.handleSubmit(state)
        }
        e.preventDefault();
    }
    //explanation why this value={state.topic || ''} was needed https://stackoverflow.com/questions/44312437/react-router-v4-this-props-history-push-not-working
    return (
        <div>
            <form onSubmit={handleSubmit} data-testid="form" action="">
                <h3>Create Note</h3>
                <h3>Topic:</h3>
                <input type="text" placeholder="topic" name="topic" autoFocus value={state.topic || ''} onChange={handleChange} />
                <h3>Description</h3>
                <input type="text" placeholder="description" name="description" id="" value={state.description || ''} onChange={handleChange} />
                <h3>Note</h3>
                <textarea placeholder="write your note here" name="note" id="" cols="30" rows="10" value={state.note || ''} onChange={handleChange} ></textarea>
                <h3>Reference</h3>
                <input type="text" placeholder="reference" name="reference" id="" value={state.reference || ''} onChange={handleChange} />
                <h3>Tag</h3>
                <input type="text" placeholder="tag" name="tag" value={state.tag || ''} onChange={handleChange} />

                <div>
                    {state.error && <p>{state.error}</p>}
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}



export default NoteForm