import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';
import { history } from '../routers/approuter';
import { startRemoveLibrary } from '../actions/libraries';
import Notes from './Notes';


export const Library = ({
    startRemoveLibrary,
    libraries,
    match
}) => {
    // const history = useHistory(); // use this instead of link to redirect to another page with params
    const library = libraries.find(({ id }) => id === match.params.id)
    const [openModal, setOpenModal] = useState(false);
    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    // const hanldleDetele = () => {
    //     startRemoveLibrary(library.id)
    //     history.push('/libraries')
    // }
    return (
        <section className=''>
            <div id='library-info'>
                <h3>{library.topic} </h3>
                <p>Description: {library.description} </p>
            </div>
            <Notes />
        </section>
    )
}





const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
});

const mapStateToProps = (state) => ({
    libraries: state.libraries
})

export default connect(mapStateToProps, mapDispatchToProps)(Library);