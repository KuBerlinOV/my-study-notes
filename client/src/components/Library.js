import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';
import { history } from '../routers/approuter';
import { startRemoveLibrary } from '../actions/libraries';
import Notes from './Notes';


export const Library = ({ topic, description, tag, createdAt, id, startRemoveLibrary }) => {
    // const history = useHistory(); // use this instead of link to redirect to another page with params
    const [openModal, setOpenModal] = useState(false);
    const [renderNotes, setRenderNotes] = useState(false);
    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    const handleRenderNotes = () => {
        setRenderNotes(!renderNotes)
    }

    return (

        <section>
            <h3> Topic: {topic} </h3>
            <p>Description: {description} </p>
            <p>Tag: {tag} </p>
            <p>Date: {moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
            <button onClick={handleModal}>Delete</button>
            <button onClick={() => {
                history.push(`/editlibrary/${id}`)
            }}> Edit</button>
            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
                className="delete-warning"
            >
                <h3>Are you sure?</h3>
                <p>Do you really want to delete this Library? This process cannot be undone!</p>
                <button onClick={() => { startRemoveLibrary(id) }}>Delete</button>
            </Modal>
            <button onClick={handleRenderNotes}>Open notes</button>
            { renderNotes && <Notes libraryId={id} />}
        </section>

    )
}



const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
})


export default connect(undefined, mapDispatchToProps)(Library);