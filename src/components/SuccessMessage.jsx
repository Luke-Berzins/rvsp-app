import React from 'react';

function SuccessMessage( {message} ) {

    
    return message["name"] ?
        <form>
            <p>Submission: {message["success"]} </p>
            <p>Name: {message["name"]}</p>
            <p>Meal Option: {message["mealOption"]}</p>
            <p>Please enter any other guests</p>
          </form>
    : null
}

export default SuccessMessage;