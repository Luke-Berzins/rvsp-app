import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from '../components/Hero'
import Form from '../components/Form'




function Home() {


    return (
        <div>
            <Parallax
        pages={2}
        >
          <Hero />
          
        </Parallax>



        </div>
    )
};

export default Home;