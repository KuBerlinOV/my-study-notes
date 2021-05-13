import React, { useEffect, useState } from 'react';
import Library from './Library';
import { history } from '../routers/approuter';
import Modal from 'react-modal';
import { startRemoveLibrary } from '../actions/libraries';

const LibraryInfoCard = ({ topic, id, description, startRemoveLibrary }) => {

    return (
        <div id='lib-card' className='lib-card'>
            <div id='lib-info' className='lib-info' onClick={() => history.push(`/libraries/${library.id}`)}>
                <h3>{library.topic}</h3>
                <p>Description: {library.description}</p>
            </div>
            <div id='lib-card-buttons' className='lib-card-buttons'>
                <button onClick={handleModal}>Delete</button>
                <button onClick={() => {
                    history.push(`/editlibrary/${library.id}`)
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
                <button onClick={() => {
                    props.startRemoveLibrary(library.id)
                    history.push('/libraries')
                }}>Delete</button>
            </Modal>
        </div>
    )
}