import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css'
import { ParallaxLayer } from '@react-spring/parallax';


function Form() {
  const [name, setName] = useState('');
  const [mealOption, setMealOption] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const firestore = firebase.firestore();

    firestore.collection("wedding_submit").add({
        name: name,
        mealOption: mealOption
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
    setName('');
    setMealOption('');
  };

  return (
    

    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          />
      </label>
      <br />
      <label>
  Meal Option:
  <select value={mealOption} onChange={e => setMealOption(e.target.value)}>
    <option value="">Select an option</option>
    <option value="meat">Meat</option>
    <option value="vegetarian">Vegetarian</option>
  </select>
</label>

      <br />
      <button type="submit">Submit</button>
    </form>
      
  );
}

export default Form;