import React from 'react';
import { shallow, mount } from 'enzyme';
import { NotesListFilters } from '../../components/NotesListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByStatusSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByStatusSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
        <NotesListFilters
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByStatus={sortByStatusSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
        />)
})

describe('NoteListFilters', () => {
    it('should render with default data correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render with alt data correctly', () => {
        wrapper.setProps({
            filters: altFilters,
        })
        expect(wrapper).toMatchSnapshot();
    });
    it('should handle text input change and pass correct data to dispatch props', () => {
        wrapper.find('input').at(0).simulate('change', {
            target: { value: 'redux' }
        })
        expect(setTextFilterSpy).toHaveBeenCalledWith('redux')
    }); //<--simulated input text on change with the value redux to check if it was passed correctly to dispatch prop
    it('should sort by status', () => {
        wrapper.find('select').at(0).simulate('change', {
            target: { value: 'status' }
        })
        expect(sortByStatusSpy).toHaveBeenCalled();
    });
    it('should sort by date', () => {
        wrapper.find('select').simulate('change', {
            target: { value: 'date' }
        })
        expect(sortByDateSpy).toHaveBeenCalled();
    })
    it('should handle date changes', () => {
        const startDate = moment(0).add(7, 'days');
        const endDate = moment(0).add(20, 'days');
        wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
        expect(setStartDateSpy).toHaveBeenCalledWith(startDate);
        expect(setEndDateSpy).toHaveBeenCalledWith(endDate);
    })
    it('should handle date focus', () => {
        const calendarFocused = 'endDate'
        wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
        //down here since I cannot test the state change in a functional component, I assert that the prop of the DateRangePicker was changed correctly
        expect(wrapper.find('withStyles(DateRangePicker)').prop('focusedInput')).toEqual(calendarFocused)
    })
})