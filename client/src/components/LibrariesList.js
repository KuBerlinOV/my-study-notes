import React, { useState } from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import selectLibraries from '../selectors/libraries';


export const LibrariesList = (props) => {
    const [libraryOpen, setLibraryOpen] = useState(false)
    const [openedLibraryIndex, setOpenedLibraryIndex] = useState(null)
    const handleLibraryOpen = (index) => {
        setLibraryOpen(!libraryOpen)
        setOpenedLibraryIndex(index)
        console.log(index)
    }

    if (props.libraries.length === 0) {
        return (<p>Create your first library to organize your studies</p>)
    } else {
        return (
            <ul key="libraryid" >
                {props.libraries.map((library, index) => {
                    if (libraryOpen === false) {
                        return <li><Library
                            key={library.id}
                            index={index}
                            id={library.id}
                            {...library}
                            showModal={props.showModal}
                            handleLibraryOpen={handleLibraryOpen}
                        />

                        </li> //<- {...note} this is spreading the note objects with all their key/value pairs and return from the state into the props.
                    } else if (libraryOpen === true) {
                        if (index === openedLibraryIndex) {
                            return <div><Library
                                key={library.id}
                                index={index}
                                id={library.id}
                                {...library}
                                showModal={props.showModal}
                                handleLibraryOpen={handleLibraryOpen}
                            /></div>
                        }
                    }

                })}

            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: selectLibraries(state.libraries, state.filters)
    }
}

export default connect(mapStateToProps)(LibrariesList)