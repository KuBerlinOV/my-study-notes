import moment from 'moment'
const notes = [{
    id: '1',
    topic: 'redux',
    description: 'redux note',
    note: 'here is a note',
    reference: 'some reference',
    tag: 'some tag',
    status: 'mastered',
    createdAt: 0
},
{
    id: '2',
    topic: 'react',
    description: 'react note',
    note: 'here is another note',
    reference: 'some other reference',
    tag: 'some other tag',
    status: 'in progress',
    createdAt: moment(0).subtract(6, 'days').valueOf()
},
{
    id: '3',
    topic: 'moment.js',
    description: 'about moment',
    note: 'here is information',
    reference: 'moment from moment.js',
    tag: 'moment',
    status: 'in progress',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default notes