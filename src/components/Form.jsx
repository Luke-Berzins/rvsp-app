import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css';
import SuccessMessage from './SuccessMessage';

function Form() {
  const [name, setName] = useState('');
  const [mealRestriction, setmealRestriction] = useState('');
  const [message, setMessage] = useState({
    success: '',
    name: '',
    mealRestriction: ''
  });


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
        mealRestriction: mealRestriction
    })
    .then(function() {
        console.log("Document successfully written!");
        setMessage({
          success: <span>&#10003;</span>,
          name: name,
          mealRestriction: mealRestriction
        })

    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        setMessage({
          success:  <span>Failed &#x2718;</span>,
          name: "Failed",
          mealRestriction: "Failed"
        })
      });
      setMessage({
        success: <span>&#10003;</span>,
        name: name,
        mealRestriction: mealRestriction
      })
    setName('');
    setmealRestriction('');
  };
  
  return (
   <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div className="rvsp">
          <img alt="form-corner" src="assets/form-corner.svg" style={{ transform: "scaleX(-1) rotate(60deg)" }}/>
          <div>
            <h1>RVSP</h1>
            <hr className="hr-tails" />
          </div>
          <img alt="form-corner" src="assets/form-corner.svg" style={{transform: "rotate(60deg)"}}/>
        </div>
        <p>Please submit one per guest;</p>
      </div>    

      <hr className="hr-tais" />
      <br />
      <br />
      <h2>Guest Name</h2>
      <div className="col-3 input-effect">
  	    <input 
        className="effect-18" 
        type="text" 
        placeholder=""
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <label>Enter Full Name</label>
        <span className="focus-border"></span>
      </div>
      <br />
      <br />
      <h2>Food and Beverage</h2>
      <p>There will be a family style meal and open bar. Please let us know of any dietary restrictions.</p>
      <div className="col-3 input-effect">
  	    <input 
        className="effect-18" 
        type="text" 
        placeholder=""
        value={mealRestriction}
        onChange={e => setmealRestriction(e.target.value)}
        />
        <label>Enter Dietary Restrictions</label>
        <span className="focus-border"></span>
      </div>
      <br />
      <hr className="hr-tais" />
      <button type="submit" className="submission">Submit</button>
    </form>
      <SuccessMessage message={message}/>
  </div>
  );
}

export default Form;