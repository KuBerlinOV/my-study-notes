import React, { useEffect, useState } from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import selectLibraries from '../selectors/libraries';
import { history } from '../routers/approuter';
import Modal from 'react-modal';
import { startRemoveLibrary } from '../actions/libraries';

const LibrariesList = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }
    // const hanldleDetele = (id) => {
    //     props.startRemoveLibrary(id)
    //     history.push('/libraries')
    // }
    return (
        <div>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                <div key={"lib-list"} >
                    {props.libraries.map(library => {
                        return <div>
                            <div id='lib-card' className='lib-card' onClick={() => history.push(`/libraries/${library.id}`)}>
                                <h3>{library.topic}</h3>
                                <p>Description: {library.description}</p>
                            </div>
                            <button onClick={handleModal}>Delete</button>
                            <button onClick={() => {
                                history.push(`/editlibrary/${library.id}`)
                            }}> Edit</button>
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
                    })}
                    <Route path='/libaries/:id' component={Library} />
                </div>
            )}
        </div>
    )
}

// <Route path={`libraries/:id`} >
// <Library
//     key={library.id}
//     id={library.id}
//     {...library}
// />
// </Route>

const mapStateToProps = (state) => {
    return {
        libraries: selectLibraries(state.libraries, state.filters),
        isAuthenticated: !!state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LibrariesList)