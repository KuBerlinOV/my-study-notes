import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { history } from '../routers/approuter';
import Modal from 'react-modal';
import { startRemoveLibrary } from '../actions/libraries';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import BookIcon from '@material-ui/icons/Book';

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
        <div className='lib-card'>
            <div className='lib-card-info' onClick={() => history.push(`/libraries/${id}`)}>
                <BookIcon />
                <h2 className='hd-md'>{topic}</h2>
                <hr />
                <p className='hd-sm'>About:</p>
                <p className='card-p'>{description}</p>
                <hr />
                <p>#{tag}</p>
                <p>{moment(createdAt).format('MMMM Do YYYY, h:mm')}</p>
            </div>
            <hr />
            <div className='lib-card-btn'>
                <Button className='btn-sm' size='small' onClick={handleModal}><DeleteIcon />Delete</Button>
                <Button className='btn-sm' size='small' onClick={() => {
                    history.push(`/editlibrary/${id}`)
                }}><UpdateIcon /> Edit</Button>
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


// onClick={() => history.push(`/libraries/${id}`)}