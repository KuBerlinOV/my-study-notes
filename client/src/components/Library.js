import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NotesList } from './NotesList';
import { NotesListFilters } from './NotesListFilters';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const Library = ({
    libraries,
    match,
    notes,
    history
}) => {
    const library = libraries.find(({ id }) => id === match.params.id)
    const [showFilters, setShowFilters] = useState(false);
    const handleFilters = () => {
        setShowFilters(!showFilters)
    }
    return (
        <main id='notes-page' className='notes-page'>
            <div className='notes-page-top'>
                <h2 class='hd-md'>{library.topic} </h2>
                <div className='btns-notes'>
                    <Button className='btn-lg' onClick={() => { history.push('/addnote') }}>Create Note</Button>
                    <Button className='btn-lg' onClick={handleFilters}>
                        <ExpandMoreIcon />
                        Filters
                    </Button>
                </div>
                {showFilters && <NotesListFilters handleFilters={handleFilters} />}
            </div>
            <NotesList notes={notes} libraryId={match.params.id} />
        </main>
    )
}

// <Notes libraryId={match.params.id} />




const mapStateToProps = (state) => ({
    libraries: state.libraries,
    notes: state.notes
})

export default connect(mapStateToProps)(Library);