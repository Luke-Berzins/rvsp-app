import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../styles/Form.css';
import SuccessMessage from '../components/SuccessMessage';

function Rsvp() {
  const [formFields, setFormFields] = useState({ 
    name: '', 
    mealRestriction: '',
    notAttending: false
  });

  const [successMessage, setSuccessMessage] = useState({
    success: '',
    name: '',
    mealRestriction: '',
    notAttending: false
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormFields({ ...formFields, [name]: fieldValue });
  };

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
        name: formFields.name,
        mealRestriction: formFields.mealRestriction,
        notAttending: formFields.notAttending
    })
    .then(function() {
        console.log("Document successfully written!");
        setSuccessMessage({
          success: <span>&#10003;</span>,
          name: formFields.name,
          mealRestriction: formFields.mealRestriction,
          notAttending: formFields.notAttending
        })

    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        setSuccessMessage({
          success:  <span>Failed &#x2718;</span>,
          name: "Failed",
          mealRestriction: "Failed",
          notAttending: "Failed"
        })
      });
    setFormFields({ 
      name: '', 
      mealRestriction: '',
      notAttending: false
    });
  };
  
  return (
   <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div className="rvsp">
          <img alt="form-corner" src="assets/form-corner.svg" style={{ transform: "scaleX(-1) rotate(60deg)" }}/>
          <div>
            <h1>RSVP</h1>
            <hr className="hr-tails" />
          </div>
          <img alt="form-corner" src="assets/form-corner.svg" style={{transform: "rotate(60deg)"}}/>
        </div>
        <p>Please submit one per guest, and let us know by May 1st!</p>
      </div>    

      <hr className="hr-tais" />
      <br />
      <h2>Guest Name</h2>
      <div className="col-3 input-effect">
      <input
        className="effect-18" 
        type="text" 
        placeholder=""
        name="name"
        value={formFields.name}
        onChange={handleInputChange}
        />
        <label>Enter Full Name</label>
        <span className="focus-border"></span>
      </div>
      <br />
      <br />
      <h2>Food and Beverage</h2>
      <p>There will be a family style meal. Please let us know of any dietary restrictions.</p>
      <div className="col-3 input-effect">
      <input 
        className="effect-18" 
        type="text" 
        placeholder=""
        name="mealRestriction"
        value={formFields.mealRestriction}
        onChange={handleInputChange}
        />
        <label>Enter Dietary Restrictions</label>
        <span className="focus-border"></span>
      </div>
      <br />
      <hr className="hr-tais" />
      <label>
        Not Attending?
        <input
          type="checkbox"
          name="notAttending"
          checked={formFields.attendance}
          onChange={handleInputChange}
        />
      </label>
      <div className="rvsp" style={{paddingTop: "40px"}}>
      <img 
        alt="form-corner" 
        src="assets/form-corner.svg" 
        style={{ transform: "scaleX(-1) rotate(150deg)" }}/>
      <button 
        type="submit" 
        className="submission">Submit</button>
      <img 
        alt="form-corner" 
        src="assets/form-corner.svg" 
        style={{ transform: "scaleX(-1) rotate(240deg)" }}/>
      </div>
      <br />
      <SuccessMessage message={successMessage}/>
    </form>
  </div>
  );
}

export default Rsvp;