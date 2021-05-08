import React from 'react';
import { connect } from 'react-redux';
import { startAddLibrary } from '../actions/libraries';
import LibraryForm from './LibraryForm';

export const AddLibrary = (props) => {

    return (
        <LibraryForm
            handleSubmit={(library) => {
                props.startAddLibrary(library);
                props.history.push('/library');
            }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddLibrary: (library) => dispatch(startAddLibrary(library))
})

export default connect(undefined, mapDispatchToProps)(AddLibrary);