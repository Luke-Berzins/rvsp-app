import React from 'react';

function SuccessMessage( {message} ) {

    
    return message["name"] ?
        <div>
            <p>Submission: {message["success"]} </p>
            <p>Name: {message["name"]}</p>
            <p>Meal Option: {message["mealOption"]}</p>
          </div>
    : null
}

export default SuccessMessage;