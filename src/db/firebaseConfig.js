import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_uW4oZt6-s3qHjkqq_Mq5ahtaQgvW9Nc",
    authDomain: "quanto-amor.firebaseapp.com",
    projectId: "quanto-amor",
    storageBucket: "quanto-amor.firebasestorage.app",
    messagingSenderId: "778664857356",
    appId: "1:778664857356:web:82572a3b00cca019280329"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
