import React, { useState } from 'react';
import { history } from '../routers/approuter';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-modal';
import AddNote from './AddNote';






const Notes = ({ libraryId }) => {
    //modal manipulation
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal);
        history.push(`/libraries/${libraryId}/addnote`)
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
                    <Route exact path='/libraries/:id/addnote'><AddNote /></Route>
                </Modal>
            </section>
        </div>
    )
}

export default Notes

