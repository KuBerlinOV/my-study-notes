import { database } from '../firebase/firebase';

// import { v4 as uuidv4 } from 'uuid'
//ADD_NOTE

// export const addNote = ({ topic = '', // in this case you should imagine destructuring as you are passing some object with the same data like ' const movie = {title, year, id} '
//     description = '',           //when we are passing it to the action function as an argument and destructuring it. 
//     note = '',                 //when it would be like ' const {title, year, id} = movie ' 
//     reference = '',            //Furthermore, we provide here the default values for the object keys so
//     tag = '#',
//     status = 'in progress',     //the user could leave these options empty if he wanted to.
//     createdAt = 0
// } = {}) => {
//     return {
//         type: 'ADD_NOTE',
//         note: {
//             id: uuidv4(),
//             topic,
//             description,
//             note,
//             reference,
//             tag,
//             status,
//             createdAt
//         }
//     }
// }


export const addNote = (note, libraryId) => ({
    type: 'ADD_NOTE',
    libraryId,
    note
})

export const startAddNote = ({
    libraryId = '',
    topic = '',
    description = '',
    text = '',
    reference = '',
    tag = '#',
    status = 'in progress',
    createdAt = 0
} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const note = {
            libraryId,
            topic,
            description,
            text,
            reference,
            tag,
            status,
            createdAt
        };
        return database.ref(`users/${uid}/notes`).push(note)
            .then((ref) => {
                //we are dispatching after pushing the note to the database 
                dispatch(addNote(
                    {
                        id: ref.key,
                        libraryId,
                        ...note
                    }))
            }).catch((e) => {
                console.log(e, 'this did not work')
            });
    };
};

//EDIT_NOTE on the local store and in database

export const updateNote = (id, updates) => ({
    type: 'UPDATE_NOTE',
    id,
    updates
})

export const startUpdateNote = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
            dispatch(updateNote(id, updates))
        }).catch((e) => {
            console.log(e, 'the note was not updated correctly')
        })
    }
}

//updateStatus on the local store and database

export const updateStatus = (id) => ({
    type: 'UPDATE_STATUS',
    id
})

export const startUpdateStatus = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/notes/${id}/status`).once('value').then(
            (snapshot) => {
                snapshot.val() === 'in progress' ? database.ref(`users/${uid}/notes/${id}`).update({ status: 'mastered' })
                    : database.ref(`users/${uid}/notes/${id}`).update({ status: 'in progress' })
            }).then(() => {
                dispatch(updateStatus(id))
            }).catch((e) => {
                console.log(e, 'status failed to update')
            })
    }
}

//REMOVE_NOTE

export const removeNote = (id) => ({
    type: 'REMOVE_NOTE',
    id
})

export const startRemoveNote = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
            dispatch(removeNote(id));
        }).catch((e) => {
            console.log(e, 'this did not work')
        })
    }
}


//SET_NOTES and startSetNotes
export const setNotes = (notes) => ({
    type: 'SET_NOTES',
    notes
});


export const startSetNotes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //the second return before the database is needed in order to make sure that in the index js file it will pass
        return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
            const notes = [];
            snapshot.forEach((childSnapshot) => {
                notes.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setNotes(notes))
        }).catch((e) => {
            console.log(e, 'this did not work')
        })
    }
};