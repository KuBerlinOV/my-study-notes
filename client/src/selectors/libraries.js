import moment from 'moment';


const selectLibraries = (libraries, { text, sortBy, startDate, endDate }) => {
    return libraries.filter(library => {
        const descriptionToMatch = library.topic.toLowerCase()
        const topicToMatch = library.description.toLowerCase();
        const textMatch = descriptionToMatch.includes(text.toLowerCase()) || topicToMatch.includes(text.toLowerCase()) ? true : false;

        const createdAtMoment = moment(library.createdAt)
        //dates pickers logic with moment methods are needed because the note.createdAt are not a number/unixtimestamp the anymore. 
        //The moment.js returns the moment instances. Therefore we need to use moment methods to compare moment instances or dates and not numbers like it was done before.
        //Here is an example how it was done before: const endDateMatch = typeof endDate !== 'number' || note.createdAt <= endDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'status') {
            return a.status === 'mastered' ? 1 : -1
        }
    })
}

export default selectLibraries;