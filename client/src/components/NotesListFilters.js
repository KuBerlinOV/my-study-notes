import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByStatus } from '../actions/filters';
import 'react-dates/initialize';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export const NotesListFilters = (props) => {
    const [calendarFocused, setCalendarFocused] = useState(null)


    //Date picker logic and on change manipulation
    const handleDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    };
    const handleOnFocusChange = (calFocused) => {
        setCalendarFocused(calFocused)
    };
    //sortBy status or date
    const handleStatusChange = (e) => {
        e.target.value === "status" ? props.sortByStatus() : props.sortByDate()
    };
    //search by input text
    const handleTextInputChange = (e) => {
        props.setTextFilter(e.target.value)
    }
    const filters = useSelector(state => state.filters)
    return (
        <div className='notes-filters'>
            <Button onClick={props.handleFilters} className='btn btn-close'>Close<CancelIcon /></Button>
            <div className="notes-filters-search">
                <h3>Search</h3>
                <input type="text" className='text-input' value={filters.text} onChange={handleTextInputChange} />
            </div>
            <div className='filters-sort' >
                <h3>Sort by</h3>
                <select className="notes-sort"
                    value={filters.sortBy}
                    onChange={handleStatusChange}>
                    <option value="status">Status</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={filters.startDate}
                    endDate={filters.endDate}
                    onDatesChange={handleDatesChange}
                    focusedInput={calendarFocused}
                    showClearDates={true}
                    onFocusChange={handleOnFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId="startDateId"
                    endDateId="endDateId"
                />
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByStatus: () => dispatch(sortByStatus()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})
//dispatching to props in order to test if they are called with the correct data when dispatch

export default connect(mapStateToProps, mapDispatchToProps)(NotesListFilters);