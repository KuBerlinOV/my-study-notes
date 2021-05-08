import React from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import selectLibraries from '../selectors/libraries';


export const LibrariesList = (props) => {
    return (
        <div>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                <ul key={"libraryid"} >
                    {props.libraries.map(library => {
                        return <li><Library
                            key={library.id}
                            id={library.id}
                            {...library}
                            showModal={props.showModal}
                        />

                        </li> //<- {...library} this is spreading the library objects with all its key/value pairs and return from the state into the props.
                    })}

                </ul>
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