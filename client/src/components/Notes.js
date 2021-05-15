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
        <div className='notes-page'>
            <NotesListFilters />
            <h3>Notes</h3>
            <button onClick={handleModal}>Create Note</button>
            <Modal
                isOpen={showModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
            >
                <AddNote handleModal={handleModal} libraryId={libraryId} />
            </Modal>
            <NotesList libraryId={libraryId} />
        </div>
    )
}

export default Notes

