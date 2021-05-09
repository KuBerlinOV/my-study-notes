import React from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Link } from 'react-router-dom';
import { history } from '../routers/approuter';
import { Route } from 'react-router-dom';




const Notes = ({ libraryId }) => {


    //modal manipulation
    // const [showModal, setShowModal] = useState(false)

    // const handleModal = (e) => {
    //     e.preventDefault();
    //     if (showModal === true) {
    //         setShowModal(false)
    //     } else {
    //         setShowModal(true)
    //     }
    // }

    return (
        <div>
            <section>
                <NotesListFilters />
                <h1>My notes: </h1>
                <button onClick={() => { history.push(`/libraries/${libraryId}/addnote`) }}>Create Note</button>
                <NotesList />
            </section>
        </div>
    )
}

export default Notes