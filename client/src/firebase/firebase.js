// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

//config for testing database 

// const firebaseConfigTest = {
//     apiKey: "AIzaSyCpleu_xUzCrlUzyPWQLijtmH3KCqhyvaQ",
//     authDomain: "my-study-notes-test.firebaseapp.com",
//     projectId: "my-study-notes-test",
//     storageBucket: "my-study-notes-test.appspot.com",
//     messagingSenderId: "258552542269",
//     appId: "1:258552542269:web:69692d305b2ff9bad02654",
//     measurementId: "G-1D41TQKQ3S"
// };

const firebaseConfig = {
    apiKey: "AIzaSyA3cz98YRe3gHFEVr1okM6sK3PAKEcEh-c",
    authDomain: "my-study-notes.firebaseapp.com",
    databaseURL: "https://my-study-notes-default-rtdb.firebaseio.com",
    projectId: "my-study-notes",
    storageBucket: "my-study-notes.appspot.com",
    messagingSenderId: "50418473866",
    appId: "1:50418473866:web:5d23a20374db9b932d8673",
    measurementId: "G-3YSM8JEREJ"
};



firebase.initializeApp(firebaseConfig);

firebase.firestore();

const database = firebase.database();

//creating auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database, googleAuthProvider };


//Reminders

// database.ref('notes').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('notes')
//     .on('value', (snapShot) => {
//         const notes = [];
//         snapShot.forEach((childSnapshot) => {
//             notes.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(notes)
//     })

// database.ref('notes').push({
//     topic: 'Testing with Enzyme',
//     description: 'A very important topic',
//     note: 'and very difficult'
// })

// setTimeout(() => {
//     database.ref('notes').push({
//         topic: 'Testing with Enzyme',
//         description: 'A very important topic',
//         note: 'and very difficult'
//     })
// }, 7000)
// database.ref().set({
//     name: 'Basan Kuberlinov',
//     education: 'Art Historian and Self-taught Web Developer',
//     job: {
//         title: 'Junior Fron End Developer',
//         company: 'Tesla inc.'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Berlin',
//         country: 'Germany'
//     },
// }).then(() => {
//     console.log('date is saved')
// }).catch((e) => {
//     console.log('it failed', e)
// })

// database.ref('background').set({
//     'Place of Birth': 'Elista',
//     Age: 34
// }).then(() => {
//     console.log('data updated')
// }).catch((e) => {
//     console.log('update failed', e)
// }
// )

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'google',
//     'location/city': 'Berlin'
// }).then(() => {
//     console.log('data updated')
// })

// database.ref('background/Place of Birth').remove().then(() => {
//     console.log('data was removed')
// })

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     }).catch((e) => {
//         console.log('error fetching data', e)
//     })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('could not fetch the data', e)
// })


// setTimeout(() => {
//     database.ref().update({
//         'location/city': 'Berlin',
//         'job/company': 'Tesla',
//         name: 'Basan'
//     })
// }, 3000)


// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7700)

// setTimeout(() => {
//     database.ref('location/city').set('Koln')
// }, 10000)