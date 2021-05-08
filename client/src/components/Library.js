import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from 'react-modal';
import { history } from '../routers/approuter';


export const Library = ({ topic, description, createdAt, id, tag }) => {
    // const history = useHistory(); // use this instead of link to redirect to another page with params
    const [openModal, setOpenModal] = useState(false)

    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    return (
        <div>
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Tag: {tag} </p>
            <button onClick={() => { }}>Change status</button>
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
                <p>Do you really want to delete this Library? This process cannot be undone!</p>
                <button onClick={() => { }}>Delete</button>
            </Modal>
        </div>
    )
}

// () => { startRemoveLibrary(id) }
// () => {
//     startUpdateStatus(id)
// }
export default Library