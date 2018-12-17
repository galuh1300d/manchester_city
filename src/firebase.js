import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDhQqLMclE_Xy6SGhjcCTyIRU12LMfkHJ0",
    authDomain: "manchester-city-de60c.firebaseapp.com",
    databaseURL: "https://manchester-city-de60c.firebaseio.com",
    projectId: "manchester-city-de60c",
    storageBucket: "manchester-city-de60c.appspot.com",
    messagingSenderId: "728301878505"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}