import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css'
import MealSelect from './MealSelect'
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
        setMessage({
          success:  <span>Failed &#x2718;</span>,
          name: "Failed",
          mealOption: "Failed"
        })
      });
      setMessage({
        success: <span>&#10003;</span>,
        name: name,
        mealOption: mealOption
      })
    setName('');
    setMealOption('');
  };
  
  return (
   <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div className="rvsp">
          <img src="l&l.png" />
          <h1>RVSP</h1>
          <img src="l&l.png" />
        </div>
        <p>Please submit for each guest;</p>
      </div>    
      <h2>Guest Name</h2>
      <div class="col-3 input-effect">
  	    <input 
        class="effect-18" 
        type="text" 
        placeholder=""
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <label>Enter Full Name</label>
        <span class="focus-border"></span>
      </div>
      <br />
      <br />
      <h2>Meal Selection</h2>
      <MealSelect mealOption={setMealOption} />
      <br />
      <br />
      <button type="submit" className="submission">Submit</button>
      <SuccessMessage message={message}/>
    </form>
  </div>
  );
}

export default Form;