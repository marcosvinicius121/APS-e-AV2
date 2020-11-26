import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwl8vdHQFTf1NWBH9PgBTCO5R7pmOMBi8",
    authDomain: "rn-appgrupou.firebaseapp.com",
    databaseURL: "https://rn-appgrupou.firebaseio.com",
    projectId: "rn-appgrupou",
    storageBucket: "rn-appgrupou.appspot.com",
    messagingSenderId: "912535479186",
    appId: "1:912535479186:web:6c7d217728f4396f98174b"
};
  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
