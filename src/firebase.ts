import firebase from 'firebase/app';

//firebase config

const firebaseConfig = {
  apiKey: "AIzaSyBgcUOolPs7nVVEPgNB6fx-Fgj2a3lMMsU",
  authDomain: "gql-project-cfb80.firebaseapp.com",
  projectId: "gql-project-cfb80",
  storageBucket: "gql-project-cfb80.appspot.com",
  messagingSenderId: "673809830680",
  appId: "1:673809830680:web:3c3f560de707dca000046d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Providers
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();