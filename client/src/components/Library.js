import React from 'react';
import { connect } from 'react-redux';
import Notes from './Notes';


export const Library = ({
    libraries,
    match
}) => {
    const library = libraries.find(({ id }) => id === match.params.id)
    return (
        <section className=''>
            <div id='library-info'>
                <h3>{library.topic} </h3>
                <h4>Description</h4>
                <p>{library.description}</p>
                <p>#{library.tag} </p>
            </div>
            <Notes libraryId={match.params.id} />
        </section>
    )
}






const mapStateToProps = (state) => ({
    libraries: state.libraries
})

export default connect(mapStateToProps)(Library);