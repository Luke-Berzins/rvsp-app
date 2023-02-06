import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from '../components/Hero'
import Ourstory from '../components/Ourstory';




function Home() {


    return (
        <div>
            <Parallax
                pages={2}
             >       
            <ParallaxLayer
                offset={window.innerWidth < 768 ? 0.3 : 1}
            >
                    <Ourstory />
            </ParallaxLayer>
        </Parallax>
        </div>
    )
};

export default Home;