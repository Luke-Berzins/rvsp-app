import React from 'react';

function SuccessMessage( {message} ) {
    
    return message["success"] ?
        <div>
            <p>Name: {message["name"]}</p>
            <p>Meal Restriction: {message["mealRestriction"]}</p>
            <p>Attending: {message.notAttending ? "No" : "Yes"}</p>
            <p>Please submit other guests</p>
            <p>Submission: {message["success"]} </p>
            <img alt="stamp l&l" src="./assets/l&l.png" style={{
                "marginTop": '2%',
                "width":'50%',
            }}/>
        </div>
    : null
}

export default SuccessMessage;