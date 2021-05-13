import React from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import PrivateRoute from '../routers/PrivateRoute';
import selectLibraries from '../selectors/libraries';
import LibraryInfoCard from './LibraryInfoCard';

const LibrariesList = (props) => {
    return (
        <div>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                <div key={"lib-list"} >
                    {props.libraries.map(library => {
                        return <LibraryInfoCard
                            id={library.id}
                            topic={library.topic}
                            description={library.description}
                        />
                    })}
                    <PrivateRoute path='/libaries/:id' component={Library} />
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