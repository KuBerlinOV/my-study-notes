const librariesReducerDefaultState = []

const librariesReducer = (state = librariesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_LIBRARIES':
            return action.libraries;
        case 'ADD_LIBRARY':
            return [...state, action.library];
        case 'UPDATE_LIBRARY':
            return state.map(library => {
                if (library.id === action.id) {
                    return {
                        ...library,
                        ...action.updates
                    }
                } else {
                    return library
                }
            });
        case 'REMOVE_LIBRARY':
            return state.filter(({ id }) => id !== action.id);
        case 'UPDATE_STATUS':
            return state.map(library => {
                if (library.id === action.id && library.status === 'in progress') {
                    return {
                        ...library,
                        status: 'mastered'
                    }
                } else if (library.id === action.id && library.status === 'mastered') {
                    return {
                        ...library,
                        status: 'in progress'
                    }
                } else {
                    return library
                }
            })
        default:
            return state;
    }

}

export default librariesReducer;