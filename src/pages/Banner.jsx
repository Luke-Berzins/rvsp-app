import React from 'react'
import Nav from '../components/Nav'
import '../styles/Banner.css'

function Banner() {


    return (
        <header className="heading">
        <img src='/parallax/pngegg.png' />
        <p>Luke</p>
        <p className='title_and'>and</p>
        <p>Elizabeth</p>
        <Nav />
        </header>
    )
}

export default Banner;