import React from 'react';
import { connect } from 'react-redux';
import { startAddLibrary } from '../actions/libraries';
import LibraryForm from './LibraryForm';

export const AddLibrary = (props) => {

    return (
        <div className='add-lib'>
            <h2 className='hd-md'>Create Library</h2>
            <LibraryForm
                handleSubmit={(library) => {
                    props.startAddLibrary(library);
                    props.history.push('/libraries');
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddLibrary: (library) => dispatch(startAddLibrary(library))
})

export default connect(undefined, mapDispatchToProps)(AddLibrary);