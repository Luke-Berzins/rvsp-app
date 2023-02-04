import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css'
import SuccessMessage from './SuccessMessage';

function Form() {
  const [name, setName] = useState('');
  const [mealOption, setMealOption] = useState('');
  const [message, setMessage] = useState({
    success: '',
    name: '',
    mealOption: ''
  })
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

    firestore.collection("peeps").add({
        name: name,
        mealOption: mealOption
    })
    .then(function() {
        console.log("Document successfully written!");
        setMessage({
          success: <span>&#10003;</span>,
          name: name,
          mealOption: mealOption
        })

    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    if (message["name"] === '') {
      setMessage({
        success:  <span>Failed &#x2718;</span>,
        name: "Failed",
        mealOption: "Failed"
      })
    }
    setName('');
    setMealOption('');
  };
  
  return (
    
    <div>

    <form onSubmit={handleSubmit}>
      <h3>Please submit one for each guest</h3>
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
          < SuccessMessage message={message}/>
      <div>
          <h3>Our Contact Info:</h3>
          <p>lukeberzins16@gmail.com | 519-533-8637</p>
          <p>elizabethhghs@gmail.com | 519-580-7736</p>
          
      </div>
    </form>
    </div>
      
  );
}

export default Form;