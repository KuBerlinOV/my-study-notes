import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Modal from 'react-modal';

export const LoginPage = ({ startLogin }) => {
    const [openModal, setOpenModal] = useState(false)

    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    return (
        <div className='login-page'>
            <h1 className='h-lg'>My Study Notes</h1>
            <button className='start-btn' onClick={handleModal}>Start organizing your studies</button>
            <Modal
                className={'login-box'}
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={handleModal}
            >
                <p className='login-title'>Login with your Google Account:</p>
                <button className='login-btn' onClick={startLogin}>Login</button>
            </Modal>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => { dispatch(startLogin()) }
});

export default connect(undefined, mapDispatchToProps)(LoginPage)