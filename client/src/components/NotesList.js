import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import selectNotes from '../selectors/notes';


export const NotesList = (props) => {
    return (
        <div>
            { props.notes.length === 0 ? (
                <p>No notes</p>
            ) : (
                <ul>
                    {props.notes.map(note => {
                        return <li><Note
                            key={note.topic}
                            id={note.id}
                            {...note}
                            showModal={props.showModal}
                        />

                        </li> //<- {...note} this is spreading the note objects with all their key/value pairs and return from the state into the props.
                    })}

                </ul>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: selectNotes(state.notes, state.filters)
    }
}

export default connect(mapStateToProps)(NotesList)