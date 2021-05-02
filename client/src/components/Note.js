import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm'
import moment from 'moment'
import { removeNote, updateStatus } from '../actions/notes'
import { useHistory } from 'react-router-dom';

// note: {
//     id: uuid(),
//     topic,
//     description,
//     note,
//     reference,
//     tag,
//     status,
//     createdAt
// }

export const Note = ({ topic, description, note, reference, tag, createdAt, id, status, updateStatus, removeNote }) => {
    const history = useHistory(); // use this instead of link to redirect to another page with params
    return (
        <div>
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Note: {note} </p>
            <p>Reference: {reference} </p>
            <p>Tag: {tag} </p>
            <p>Status: {status}</p>
            <button onClick={() => {
                updateStatus(id)
            }}>Change status</button>
            <p>Date: {moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
            <button onClick={() => {
                removeNote(id)
            }
            } >Delete</button>
            <button onClick={() => {
                history.push(`/edit/${id}`)
            }}> Edit</button>
        </div>
    )
}

// <Link to={`/edit/${id}`}> Edit</Link>

const mapDispatchToProps = (dispatch) => ({
    removeNote: (id) => dispatch(removeNote(id)),
    updateStatus: (id) => dispatch(updateStatus(id))
})

export default connect(undefined, mapDispatchToProps)(Note);