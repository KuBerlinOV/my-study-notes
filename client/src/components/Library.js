import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';
import { history } from '../routers/approuter';
import { startRemoveLibrary } from '../actions/libraries';
import Notes from './Notes';

export const Library = ({ topic, description, createdAt, id, tag, startRemoveLibrary }) => {
    const [libraryOpen, setLibraryOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    const handLibraryOpen = () => {
        setLibraryOpen(!libraryOpen)
    }
    console.log(topic)
    return (

        //the exact is needed so the library component would open in a new page
        <Route exact path={`/libraries/${id}`}>
            <div>
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

            </div>
        </Route>
    )
}



const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
})

export default connect(undefined, mapDispatchToProps)(Library);