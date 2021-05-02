import moment from 'moment';
import selectNotes from '../../selectors/notes';
import notes from '../fixtures/notes'

test('should filter by text value', () => {
    const filters = {
        text: 'mom',
        sortBy: 'status',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectNotes(notes, filters)

    expect(result).toEqual([notes[2]])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[0]])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[0], notes[1]])
})

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[0], notes[1]])
})


test('should filter by status', () => {
    const filters = {
        text: '',
        sortBy: 'status',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectNotes(notes, filters);

    expect(result).toEqual([notes[2], notes[1], notes[0]])
})

