import React, { useState } from 'react';
import Modal from 'react-modal';
import { history } from '../routers/approuter';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import AddNote from './AddNote';





const Notes = ({ libraryId }) => {
    //addNote modal manipulation
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <main className='notes-page'>
            <div className='notes-page-top'>
                <h1>My Notes</h1>
                <NotesListFilters />
            </div>
            {libraryId && <button onClick={handleModal}>Create Note</button>}
            <Modal
                isOpen={showModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
            >
                <AddNote handleModal={handleModal} libraryId={libraryId} />
            </Modal>
            <NotesList libraryId={libraryId} />
        </main>
    )
}

export default Notes

