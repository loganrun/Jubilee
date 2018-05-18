import * as firebase from 'firebase';
  const config = {
    apiKey: "AIzaSyBW_sPqfpdIw_B0cJXhYhVxhFAmA2-_DrM",
    authDomain: "jubilee2018-34a0a.firebaseapp.com",
    databaseURL: "https://jubilee2018-34a0a.firebaseio.com",
    projectId: "jubilee2018-34a0a",
    storageBucket: "",
    messagingSenderId: "471910822129"
  };
  
  export const firebaseApp = firebase.initializeApp(config);
  
  export const userdb = firebase.database().ref('user/');
  export const auth = firebase.auth();
  export const storage = firebase.storage().ref();
