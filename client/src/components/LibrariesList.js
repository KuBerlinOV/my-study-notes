import React from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import PrivateRoute from '../routers/PrivateRoute';
import selectLibraries from '../selectors/libraries';
import LibraryInfoCard from './LibraryInfoCard';

const LibrariesList = (props) => {
    return (
        <div id='lib-list' className='lib-list'>
            { props.libraries.length === 0 ? (
                <p>Create your first library and organize your study</p>
            ) : (
                props.libraries.map(library => {
                    return <LibraryInfoCard
                        id={library.id}
                        topic={library.topic}
                        description={library.description}
                        tag={library.tag}
                        createdAt={library.createdAt}
                    />
                })


            )}
            <PrivateRoute path='/libaries/:id' component={Library} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        libraries: selectLibraries(state.libraries, state.filters)
    }
}


export default connect(mapStateToProps)(LibrariesList)