import React from 'react';
import Hero from '../components/Hero'
import Ourstory from '../components/Ourstory';




function Home() {
    const offset = Math.round((window.innerWidth / 1800) * 10) /10

    return (
        <div>
            <Hero
            offset={offset}
            />
            <br 
            style={{margin: "20%;"}} 
            />
            <Ourstory
            offset={offset + 0.4}
            />
        </div>
    )
};

export default Home;