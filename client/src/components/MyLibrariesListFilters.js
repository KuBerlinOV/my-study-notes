import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByStatus } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export const MyLibrariesListFilters = (props) => {
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

    return (
        <div>
            <div className="search-libraries">
                <h3>Search</h3>
                <input type="text" value={props.filters.text} onChange={handleTextInputChange} />
            </div>
            <div className="sort-notes" >
                <h3>Sort by</h3>
                <select
                    value={props.filters.sortBy}
                    onChange={handleStatusChange}>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={props.filters.startDate}
                    endDate={props.filters.endDate}
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

//dispatching to props in order to test if they are called with the correct data when dispatch
const mapDispatchToProps = (dispatch) => ({
    sortByDate: () => dispatch(sortByDate()),
    sortByStatus: () => dispatch(sortByStatus()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrariesListFilters);