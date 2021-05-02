import moment from 'moment'
import { act } from 'react-dom/test-utils';
import filtersReducer from '../../reducers/filters';


test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('year'),
        endDate: moment().endOf('month')
    })
});

test('should set filter sortBy date', () => {
    const currentState = {
        text: '',
        sortBy: 'status',
        startDate: moment().startOf('year'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

//should set text filter
test('should set text filter', () => {
    // const currentState = {
    //     text: '',
    //     sortBy: 'status',
    //     startDate: moment().startOf('year'),
    //     endDate: moment().endOf('month')
    // }
    const text = 'redux'
    const action = { type: 'SET_TEXT_FILTER', text }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})


//should set startDate filter
test('should set startDate', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

//should set endDate filter

test('should set endDate', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})