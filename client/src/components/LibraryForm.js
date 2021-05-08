import React, { useState } from 'react';
import moment from 'moment';

//moment 
// const now = moment().format('MMMM Do YYYY, h:mm:ss a');
//props.noteBeforeUpdate ? moment(props.noteBeforeUpdate.createdAt) :

const NoteForm = (props) => {


    //local states
    const [state, setState] = useState({
        topic: props.library ? props.library.topic : '',
        description: props.library ? props.library.description : '',
        tag: props.library ? props.library.tag : '',
        createdAt: props.library ? props.library.createdAt : moment().format(),
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
            setState({ error: 'Please provide topic' })
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