import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startRemoveNote, startUpdateStatus } from '../actions/notes'
import Modal from 'react-modal';
//here I imported the history object created in approuter, as note does not have access to it, as it is not rendered in the approuter. It is out of the context
import { history } from '../routers/approuter';
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

export const Note = ({ topic, description, text, reference, tag, createdAt, id, status, startUpdateStatus, startRemoveNote }) => {
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
                <hr />
                <p className='info-text'>Reference: {reference} </p>
                <p className='info-text'>Tag: {tag} </p>
                <p className='info-text'>Status: {status}</p>
                <p className='info-text'>{moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
            </div>
            <hr />
            <div className='note-card-btn'>
                <button onClick={() => {
                    startUpdateStatus(id)
                }}>Change status</button>
                <button onClick={handleModal}>Delete</button>
                <button onClick={() => {
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

                <button onClick={() => { startRemoveNote(id) }}>Delete</button>
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