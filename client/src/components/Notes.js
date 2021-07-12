import React, { useState } from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Notes = () => {
    //addNote modal manipulation

    const [showFilters, setShowFilters] = useState(false);
    const handleFilters = () => {
        setShowFilters(!showFilters)
    }
    return (
        <main id='notes-page' className='notes-page'>
            <div className='notes-page-top'>
                <h1 class='hd-lg'> My Notes </h1>
                <div className='btns-notes'>
                    <Button className='btn-lg' onClick={handleFilters}>
                        <ExpandMoreIcon />
                        Filters
                    </Button>
                </div>
                {showFilters && <NotesListFilters handleFilters={handleFilters} />}
            </div>
            <NotesList />
        </main>
    )
}

export default Notes

