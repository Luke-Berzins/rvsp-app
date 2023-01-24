import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css'


function Form() {
  const [name, setName] = useState('');
  const [mealOption, setMealOption] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDIkEdfJDC80fKol3FEAj69xuD-VRTKo8s",
        authDomain: "weddingdb-a7700.firebaseapp.com",
        projectId: "weddingdb-a7700",
        storageBucket: "weddingdb-a7700.appspot.com",
        messagingSenderId: "507389456650",
        appId: "1:507389456650:web:ae5ac54d954aae1af78af3"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const firestore = firebase.firestore();

    firestore.collection("users").add({
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