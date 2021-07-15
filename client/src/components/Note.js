import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startRemoveNote, startUpdateStatus } from '../actions/notes'
import Modal from 'react-modal';
//here I imported the history object created in approuter, as note does not have access to it, as it is not rendered in the approuter. It is out of the context
import { history } from '../routers/approuter';

export const Note = ({ topic, text, reference, tag, id, status, startUpdateStatus, startRemoveNote }) => {
    // const history = useHistory(); // use this instead of link to redirect to another page with params
    const [openModal, setOpenModal] = useState(false)

    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }


    return (
        <div className='note-card'>
            <h2 className='hd-md'> {topic} </h2>
            <hr />
            <div className='note-card-info'>
                <p className='info-text' id='note-text'>{text} </p>
            </div>
            <hr />
            <p className='info-text add-info'>Reference: {reference} </p>
            <p className='info-text add-info'>Tag: {tag} </p>
            <p className='info-text add-info'>Status: {status}</p>
            <hr />
            <div className='note-card-btn'>
                <button className='btn-lg' onClick={() => {
                    startUpdateStatus(id)
                }}>Change status</button>
                <button className='btn-lg' onClick={handleModal}>Delete</button>
                <button className='btn-lg' onClick={() => {
                    history.push(`/editnote/${id}`)
                }}> Edit</button>
            </div>
            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
                className="delete-warning"
            >
                <h3>Are you sure?</h3>
                <p>Do you really want to delete this note? This process cannot be undone!</p>

                <button className='btn-lg' onClick={() => { startRemoveNote(id) }}>Delete</button>
            </Modal>
        </div >
    )
}

// <Link to={`/edit/${id}`}> Edit</Link>

const mapDispatchToProps = (dispatch) => ({
    startRemoveNote: (id) => dispatch(startRemoveNote(id)),
    startUpdateStatus: (id) => dispatch(startUpdateStatus(id))
})

export default connect(undefined, mapDispatchToProps)(Note);