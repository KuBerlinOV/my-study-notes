import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startRemoveNote, startUpdateStatus } from '../actions/notes'
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

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

export const Note = ({ topic, description, note, reference, tag, createdAt, id, status, startUpdateStatus, startRemoveNote }) => {
    const history = useHistory(); // use this instead of link to redirect to another page with params
    const [openModal, setOpenModal] = useState(false)

    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }


    return (
        <div>
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Note: {note} </p>
            <p>Reference: {reference} </p>
            <p>Tag: {tag} </p>
            <p>Status: {status}</p>
            <button onClick={() => {
                startUpdateStatus(id)
            }}>Change status</button>
            <p>Date: {moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
            <button onClick={handleModal}>Delete</button>
            <button onClick={() => {
                history.push(`/edit/${id}`)
            }}> Edit</button>
            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
                className="delete-warning"
            >
                <h3>Are you sure?</h3>
                <p>Do you really want to delete this note? This process cannot be undone!</p>
                <button onClick={() => { startRemoveNote(id) }}>Delete</button>
            </Modal>
        </div>
    )
}

// <Link to={`/edit/${id}`}> Edit</Link>

const mapDispatchToProps = (dispatch) => ({
    startRemoveNote: (id) => dispatch(startRemoveNote(id)),
    startUpdateStatus: (id) => dispatch(startUpdateStatus(id))
})

export default connect(undefined, mapDispatchToProps)(Note);