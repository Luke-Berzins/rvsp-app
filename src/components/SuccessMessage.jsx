import React from 'react';

function SuccessMessage( {message} ) {
    
    return message["success"] ?
        <div>
            <p>Name: {message["name"]}</p>
            <p>Submission: {message["success"]} </p>
            <p>Meal Restriction: {message["mealRestriction"]}</p>
            <p>Please submit other guests</p>
            <img alt="stamp l&l" src="./assets/l&l.png" style={{
                "margin-top": '2%',
                "width":'50%',
            }}/>
        </div>
    : null
}

export default SuccessMessage;