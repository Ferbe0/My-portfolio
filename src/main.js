import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPS2qCdFS9mfeYvGZqJAwMGYjoir_fWns",
  authDomain: "todo-web-df074.firebaseapp.com",
  projectId: "todo-web-df074",
  storageBucket: "todo-web-df074.appspot.com",
  messagingSenderId: "905454511035",
  appId: "1:905454511035:web:c2e115d245ec5022d9da9e",
  measurementId: "G-CFDS6KQQNF"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router)

app.mount('#app')
