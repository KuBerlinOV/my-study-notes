import React from 'react';
import { connect } from 'react-redux';
import LibraryForm from './LibraryForm';
import { startUpdateLibrary } from '../actions/libraries';
import { history } from '../routers/approuter';


export const EditLibrary = (props) => {
    return (
        <div className='add-lib'>
            <h2 className='hd-md'>Edit Library</h2>
            <LibraryForm
                //library before update
                library={props.library}
                //this is handle submit props
                handleSubmit={(library) => {
                    //dispatch action to edit the expense
                    props.startUpdateLibrary(props.library.id, library);
                    //redirect to dashBoard
                    history.push('/libraries')
                }}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startUpdateLibrary: (id, library) => dispatch(startUpdateLibrary(id, library))
})

const mapStateToProps = (state, props) => {
    return {
        library: state.libraries.find((library) => library.id == props.match.params.id)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditLibrary);