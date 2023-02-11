import React from 'react';

function SuccessMessage( {message} ) {

    
    return message["name"] ?
        <form>
            <p>Submission: {message["success"]} </p>
            <p>Name: {message["name"]}</p>
            <p>Meal Option: {message["mealOption"]}</p>
            <p>Please submit other guests</p>
            <img src="./assets/l&l.png" style={{
            "margin-top": '5%',
            "width":'50%',
            }}/>
          </form>
    : null
}

export default SuccessMessage;