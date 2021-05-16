import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { history } from '../routers/approuter';
import Modal from 'react-modal';
import { startRemoveLibrary } from '../actions/libraries';

const LibraryInfoCard = ({ topic, id, description, startRemoveLibrary, tag, createdAt }) => {
    // const lastNoteCreated = notes.map((note, index) => { if (note.libraryId === id) return note.createdAt }
    // console.log(lastNoteCreated)
    const [openModal, setOpenModal] = useState(false);
    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    const hanldleDetele = () => {
        startRemoveLibrary(id)
        setOpenModal(!openModal)
    }
    return (
        <div id='lib-info-card' className='lib-info-card'>
            <div id='lib-info' className='lib-info' onClick={() => history.push(`/libraries/${id}`)}>
                <h3>{topic}</h3>
                <p>Description: {description}</p>
                <p>#{tag}</p>
                <p>{moment(createdAt).format('MMMM Do YYYY, h:mm')}</p>
            </div>
            <div id='lib-card-buttons' className='lib-card-buttons'>
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
                <button onClick={hanldleDetele}>Delete</button>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    notes: state.notes
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LibraryInfoCard)