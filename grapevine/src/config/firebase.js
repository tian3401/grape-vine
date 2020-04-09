import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCSCTJ90on6x8LtmXeRMMgu4kvxVvsTpo0",
  authDomain: "grapevine-7d5ad.firebaseapp.com",
  databaseURL: "https://grapevine-7d5ad.firebaseio.com",
  projectId: "grapevine-7d5ad",
  storageBucket: "grapevine-7d5ad.appspot.com",
  messagingSenderId: "569906881624",
  appId: "1:569906881624:web:d7811c4b5a737914d8d62d",
  measurementId: "G-3N1ZNG6YEC"
};

const fireApp = firebase.initializeApp(config);

export default fireApp;

