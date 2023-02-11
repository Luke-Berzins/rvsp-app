import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import '../styles/Card.css'

function Card( { mealOption, setMealOption } ) {

  const { transform, opacity } = useSpring({
    opacity: mealOption === 'Vegetarian' ? 1 : 0,
    transform: `perspective(600px) rotateX(
        ${mealOption === 'Vegetarian' ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className="binder">
        <div 
        className="card-container" 
        onClick={() => setMealOption(
                mealOption === 'Vegetarian' ? 'Meat' : 'Vegetarian'
            )}
        >
          <div class="spacer"></div>
            <a.div
              className="c back"
              style={{ opacity: opacity.to(
                  o => 1 - o), transform 
                }}
              />
            <a.div
              className="c front"
              style={{
                  opacity,
                  transform,
                  rotateX: '180deg',
              }}
            />
        </div>
          <div className="meal-desc">
    {mealOption === "Vegetarian" ? <div>
    <h3>Butternut Squash Tagine</h3>
<p>
Butternut Squash | Caulliflower | Zucchini 
<br />Tandoori Sauce

</p>
          </div> : <div>
          <h3>Roast Chicken Supreme Options:</h3> 
          <p>
Wilted Spinach | Mushroom Duxelle <br />
Chipotle Rubbed | Mango Salsa | Cilantro <br />
Chimichurri | Fresh Tomato Salsa <br />
Smoked Cheddar Stuffed | Balsamic Reduction <br />
Honey Glazed | Bacon/Onion Jam

</p></div>}
    </div>
    </div>
  )
}

export default Card;