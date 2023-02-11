import React from "react";
import '../styles/MealOption.css'


const MealSelect = ( { mealOption, setMealOption } ) => {

  const handleOptionClick = event => {
      event.preventDefault()
      setMealOption(event.target.value);
  };

  return (
    <div>
    <div className="dietary-preference">

    <input
      type="submit"
      value="Vegetarian"
      className={`dietary-preference__option ${
        mealOption === "Vegetarian" ? "selected" : ""
      }`}
      onClick={handleOptionClick}
    />
    <input
      type="submit"
      value="Meat"
      className={` dietary-preference__option ${ 
        mealOption === "Meat" ? "selected" : ""
      }`}
      onClick={handleOptionClick}
    />
    </div>
  </div>
  );
};

export default MealSelect;
