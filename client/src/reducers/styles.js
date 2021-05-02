const stylesReducerDefaultState = {
    modalIsOpen: false,
}

const stylesReducer = (state = stylesReducerDefaultState, action) => {
    switch (action.type) {
        // case 'SET_MODAL_STATE':
        //     return {
        //         ...state,
        //         modalIsOpen: action.toggle
        //     }
        default:
            return state
    }
}

export default stylesReducer;