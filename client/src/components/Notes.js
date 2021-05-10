import React, { useState } from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Link, Route } from 'react-router-dom';
import { AddNote } from './AddNote';
import Modal from 'react-modal';
import { history } from '../routers/approuter';
import { addNote } from '../actions/notes';





const Notes = ({ libraryId }) => {
    //modal manipulation
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <section>
                <NotesListFilters />
                <h1>My notes: </h1>
                <button onClick={handleModal}>Create Note</button>
                <NotesList libraryId={libraryId} />
                <Modal
                    isOpen={showModal}
                    ariaHideApp={false}
                    onRequestClose={handleModal}
                >
                    <AddNote />
                </Modal>
            </section>
        </div>
    )
}

export default Notes