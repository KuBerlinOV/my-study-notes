import React from 'react';
import NotesList from './NotesList'
import NotesListFilters from './NotesListFilters';
import { Link } from 'react-router-dom';





const Notes = (props) => {


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
                <button><Link to='/addnote'>Create Note</Link></button>
                <NotesList />
            </section>
        </div>
    )
}

export default Notes