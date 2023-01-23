import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

const firebaseConfig = {
    apiKey: "AIzaSyDIkEdfJDC80fKol3FEAj69xuD-VRTKo8s",
    authDomain: "weddingdb-a7700.firebaseapp.com",
    projectId: "weddingdb-a7700",
    storageBucket: "weddingdb-a7700.appspot.com",
    messagingSenderId: "507389456650",
    appId: "1:507389456650:web:ae5ac54d954aae1af78af3"
  };
  

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);





