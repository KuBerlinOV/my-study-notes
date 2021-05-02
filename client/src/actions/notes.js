import { v4 as uuidv4 } from 'uuid';

//ADD_NOTE
export const addNote = ({ topic = '', // in this case you should imagine destructuring as you are passing some object with the same data like ' const movie = {title, year, id} '
    description = '',           //when we are passing it to the action function as an argument and destructuring it. 
    note = '',                 //when it would be like ' const {title, year, id} = movie ' 
    reference = '',            //Furthermore, we provide here the default values for the object keys so
    tag = '#',
    status = 'in progress',     //the user could leave these options empty if he wanted to.
    createdAt = 0
} = {}) => {
    return {
        type: 'ADD_NOTE',
        note: {
            id: uuidv4(),
            topic,
            description,
            note,
            reference,
            tag,
            status,
            createdAt
        }
    }
}

//EDIT_NOTE

export const updateNote = (id, updates) => ({
    type: 'UPDATE_NOTE',
    id,
    updates
})

export const updateStatus = (id) => ({
    type: 'UPDATE_STATUS',
    id
})

//REMOVE_NOTE

export const removeNote = (id) => ({
    type: 'REMOVE_NOTE',
    id
})