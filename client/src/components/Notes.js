import React from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Button } from '@material-ui/core';


const Notes = () => {
    //addNote modal manipulation


    return (
        <main id='notes-page' className='notes-page'>
            <NotesListFilters />
            <NotesList />
        </main>
    )
}

export default Notes

