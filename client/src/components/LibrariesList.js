import React from 'react';
import Library from './Library';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import selectLibraries from '../selectors/libraries';
import LibraryInfoCard from './LibraryInfoCard';

const LibrariesList = (props) => {
    // const [openModal, setOpenModal] = useState(false);
    // const handleModal = (e) => {
    //     e.preventDefault();
    //     setOpenModal(!openModal)
    // }
    // const hanldleDetele = (id) => {
    //     props.startRemoveLibrary(id)
    //     history.push('/libraries')
    // }
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

// const mapDispatchToProps = (dispatch) => ({
//     startRemoveLibrary: (id) => dispatch(startRemoveLibrary(id)),
// });

export default connect(mapStateToProps)(LibrariesList)