import { database } from '../firebase/firebase';

export const setLibraries = (libraries) => ({
    type: 'SET_LIBRARIES',
    libraries
});


export const startSetLibraries = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //the second return before the database is needed in order to make sure that in the index js file it will pass
        return database.ref(`users/${uid}/libraries`).once('value').then((snapshot) => {
            const libraries = [];
            snapshot.forEach((childSnapshot) => {
                libraries.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setLibraries(libraries))
        }).catch((e) => {
            console.log(e, 'this did not work')
        })
    }
};

export const addLibrary = (library) => ({
    type: 'ADD_LIBRARY',
    library
})

export const startAddLibrary = ({
    topic = '',
    description = '',
    notes = [],
} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const library = {
            topic,
            description,
            notes,
        };
        return database.ref(`users/${uid}/libraries`).push(library)
            .then((ref) => {
                //we are dispatching after pushing the note to the database 
                dispatch(addLibrary(
                    {
                        id: ref.key,
                        ...library
                    }))
            }).catch((e) => {
                console.log(e, 'this did not work')
            });
    };
};


//EDIT_Library on the local store and in database

export const updateLibrary = (id, updates) => ({
    type: 'UPDATE_LIBRARY',
    id,
    updates
})

export const startUpdateLibrary = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/libraries/${id}`).update(updates).then(() => {
            dispatch(updateLibrary(id, updates))
        }).catch((e) => {
            console.log(e, 'the note was not updated correctly')
        })
    }
}


//REMOVE_LIBRARY

export const removeLibrary = (id) => ({
    type: 'REMOVE_LIBRARY',
    id
})

export const startRemoveLibrary = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/libraries/${id}`).remove().then(() => {
            dispatch(removeLibrary(id));
        }).catch((e) => {
            console.log(e, 'this did not work')
        })
    }
}

export const openLibrary = (id) => {
    return {
        type: 'OPEN_LIBRARY',
        id
    }
}

// export const openAllLibraries = () => {
//     return {
//         type: 'OPEN_ALL_LIBRARIES'
//     }
// }



