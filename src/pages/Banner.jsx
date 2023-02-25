import React, { useState, useCallback} from 'react'
import Nav from '../components/Nav'
import '../styles/Banner.css'

function Banner() {
    const [isFixed, setIsFixed] = useState(false);
    
 
  

    return (
        <header>
            <img className="top-vine" src='assets/floral-top.png' />
            <h1>Luke</h1>
            <p className='title_and'>and</p>
            <h1>Elizabeth</h1>
                <img className="forest" src='/parallax/pngegg (7).png' />
            <Nav 
            isFixed={isFixed}
            setIsFixed={setIsFixed}
            />
        </header>
    )
}

export default Banner;