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
        <div>
            <section>
                <NotesListFilters />
                <h3>My notes</h3>
                <button onClick={handleModal}>Create Note</button>
                <Modal
                    isOpen={showModal}
                    ariaHideApp={false}
                    onRequestClose={handleModal}
                >
                    <AddNote libraryId={libraryId} />
                </Modal>
                <NotesList libraryId={libraryId} />
            </section>
        </div>
    )
}

export default Notes

