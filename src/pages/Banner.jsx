import React from 'react'
import Nav from '../components/Nav'
import '../styles/Banner.css'
function Banner() {
    
    

    return (
        <header className="heading">
            <img src='/parallax/pngegg.png' />
            <h1>Luke</h1>
            <p className='title_and'>and</p>
            <h1>Elizabeth</h1>
            <img className="forest" src='/parallax/pngegg (7).png' />
            <Nav />
        </header>
    )
}

export default Banner;