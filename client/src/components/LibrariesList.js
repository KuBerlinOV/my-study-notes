import React, { useEffect, useState } from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import selectLibraries from '../selectors/libraries';
import { history } from '../routers/approuter';
import Notes from './Notes';
import { openLibrary } from '../actions/libraries';

const LibrariesList = (props) => {

    console.log(props.libraries)
    return (
        <div>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                <div key={"lib-list"} >
                    {props.libraries.map(library => {
                        return <div id='lib-card' className='lib-card' onClick={() => history.push(`/libraries/${library.id}`)}>
                            <h3>{library.topic}</h3>
                            <p>Description: {library.description}</p>
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

export default connect(mapStateToProps)(LibrariesList)