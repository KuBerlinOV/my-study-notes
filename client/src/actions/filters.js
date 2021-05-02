//SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_STATUS

export const sortByStatus = () => ({
    type: 'SORT_BY_STATUS'
})

//SORT_BY_DATE

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})


//setStartDate

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//setEndDate

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

