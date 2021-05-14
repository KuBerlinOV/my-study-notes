import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import selectNotes from '../selectors/notes';


export const NotesList = (props) => {
    if (!props.libraryId) {
        return (
            <div>
                <ul key={"noteid"} >
                    {props.notes.map(note => {

                        return <li><Note
                            key={note.id}
                            id={note.id}
                            {...note}
                            showModal={props.showModal}
                            libraryId={props.libraryId}
                        />

                        </li> //<- {...note} this is spreading the note objects with all their key/value pairs and return from the state into the props.
                    })}

                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul key={"noteid"} >
                    {props.notes.map(note => {
                        if (note.libraryId === props.libraryId) {
                            return <li><Note
                                key={note.id}
                                id={note.id}
                                {...note}
                                showModal={props.showModal}
                                libraryId={props.libraryId}
                            />

                            </li> //<- {...note} this is spreading the note objects with all their key/value pairs and return from the state into the props.
                        }
                    })}

                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: selectNotes(state.notes, state.filters)
    }
}

export default connect(mapStateToProps)(NotesList)