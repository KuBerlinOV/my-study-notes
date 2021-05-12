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
        if (renderNotes === false) {
            setRenderNotes(true)
        } else {
            setRenderNotes(false)
        }
    }

    return (

        <section>
            {renderNotes && <Notes renderNotes={renderNotes} libraryId={id} libraryTopic={topic} />}
            <div id='library-info'>
                <h3> Topic: {topic} </h3>
                <p>Description: {description} </p>
                <p>Tag: {tag} </p>
                <p>Date: {moment(createdAt).format('MMMM Do YYYY, h:mm')} </p>
                <button onClick={handleModal}>Delete</button>
                <button onClick={() => {
                    history.push(`/editlibrary/${id}`)
                }}> Edit</button>
            </div>
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
        </section>
    )
}



const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
});


export default connect(undefined, mapDispatchToProps)(Library);