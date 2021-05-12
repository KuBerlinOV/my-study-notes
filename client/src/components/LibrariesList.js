import React from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import selectLibraries from '../selectors/libraries';
import { history } from '../routers/approuter';
import { Route } from 'react-router-dom';

const LibrariesList = (props) => {

    return (
        <div>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                <div key={"libraryid"} >
                    {props.libraries.map(library => {
                        return <Library
                            key={library.id}
                            id={library.id}
                            {...library}
                        />
                    })}

                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        libraries: selectLibraries(state.libraries, state.filters)
    }
}

export default connect(mapStateToProps)(LibrariesList)