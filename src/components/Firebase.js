import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyB9Z5GUMNQ0WvfKXmM_ykCXk88IJs7seNc",
  authDomain: "asuep-voting-app.firebaseapp.com",
  databaseURL:  "https:asuep-voting-app.firebaseio.com",
  projectId: "asuep-voting-app",
  storageBucket: "asuep-voting-app.appspot.com",
  messagingSenderId: "179037224921",
  appId: "1:179037224921:web:60503a1672bf672d6da3c8",
  measurementId: "G-0JFFD0M9PG"
};

firebase.initializeApp(config);
export default firebase;
