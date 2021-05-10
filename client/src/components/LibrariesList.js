import React, { useState } from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import selectLibraries from '../selectors/libraries';
import { history } from '../routers/approuter';


export const LibrariesList = (props) => {

    if (props.libraries.length === 0) {
        return (<p>Create your first library to organize your studies</p>)
    } else if (props.isAuthenticated === true) {
        return (
            <div key="libraryid" >
                {props.libraries.map((library) => {
                    return <section onClick={() => { history.push(`/libraries/${library.id}`) }}>
                        <Library id={library.id} key={library.id} {...library} />
                    </section>
                }
                )}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: selectLibraries(state.libraries, state.filters),
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(LibrariesList)