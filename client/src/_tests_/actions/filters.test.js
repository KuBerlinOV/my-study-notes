import moment from 'moment'

import { setStartDate, setEndDate, sortByDate, sortByStatus, setTextFilter } from '../../actions/filters';

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should return an action object with the type set to SORT_BY_DATE', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('should return an action object with the type set to SORT_BY_STATUS', () => {
    const action = sortByStatus();

    expect(action).toEqual({
        type: 'SORT_BY_STATUS',
    })
})

test('should generate a setTextFilter action object with the text equal to the passed string', () => {
    const text = 'redux'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate a setTextFilter action object with the text equal to undefined', () => {

    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})