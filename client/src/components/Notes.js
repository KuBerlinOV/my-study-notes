import React from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';


const Notes = () => {
    //addNote modal manipulation


    return (
        <main className='notes-page'>
            <h2 className='hd-md'>My Notes</h2>
            <NotesListFilters />
            <NotesList />
        </main>
    )
}

export default Notes

