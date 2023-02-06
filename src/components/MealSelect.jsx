import React, { useState } from "react";
import "../styles/MealSelect.css"


const MealSelect = ( {mealOption} ) => {
  const [dietaryPreference, setDietaryPreference] = useState("Vegetarian");

  const handleOptionClick = event => {
      event.preventDefault()
      setDietaryPreference(event.target.value);
      mealOption(event.target.value)
  };

  return (
    
    <div className="dietary-preference">
        
    <input
      type="submit"
      value="Vegetarian"
      className={`dietary-preference__option ${
        dietaryPreference === "Vegetarian" ? "selected" : ""
      }`}
      onClick={handleOptionClick}
    />
    <input
      type="submit"
      value="Meat"
      className={` dietary-preference__option ${ 
        dietaryPreference === "Meat" ? "selected" : ""
      }`}
      onClick={handleOptionClick}
    />
  </div>
  );
};

export default MealSelect;
