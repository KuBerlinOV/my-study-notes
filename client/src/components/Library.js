import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { NotesList } from './NotesList';
import { NotesListFilters } from './NotesListFilters';
import { Button } from '@material-ui/core';
import AddNote from './AddNote';

export const Library = ({
    libraries,
    match,
    notes
}) => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const library = libraries.find(({ id }) => id === match.params.id)
    return (
        <main id='notes-page' className='notes-page'>
            <div className='notes-page-top'>
                <h2 class='hd-md'>{library.topic} </h2>
                <Button className='btn-lg' onClick={handleModal}>Create Note</Button>
                <NotesListFilters />
            </div>
            <NotesList notes={notes} libraryId={match.params.id} />
            <Modal
                isOpen={showModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
            >
                <AddNote handleModal={handleModal} libraryId={library.id} />
            </Modal>
        </main>
    )
}

// <Notes libraryId={match.params.id} />




const mapStateToProps = (state) => ({
    libraries: state.libraries,
    notes: state.notes
})

export default connect(mapStateToProps)(Library);