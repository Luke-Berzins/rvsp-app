import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import sky from '/parallax/sky.png'
// import background from '../../public/parallax/background.png'
// import midground from '../../public/parallax/midground.png'
// import foreground from '../../public/parallax/foreground2.png'



function Hero() {


    return (

    <div>


    <Parallax
      pages={3}
      className="hola"
    >
      <ParallaxLayer>
        <h1 style={{
          color: 'white',
          fontSize: '8vw',
          fontFamily: 'cursive',
          textAlign: 'center',
          marginBottom: '1px'
        }} >Luke & Liz</h1>
        <h2 style={{
          color: 'white',
          fontSize: '5vw',
          fontFamily: 'cursive',
          textAlign: 'center',
          marginTop: '1px'
        }} >Fall 2023</h2>

      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}>

        <ParallaxLayer
          speed={0.1}

          style={{
            backgroundImage: `url(/parallax/sky.png)`,
            backgroundSize: '100%',
          }}
          factor={1}
        >

        </ParallaxLayer>
{/* 
        <ParallaxLayer
          speed={0.3}

          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: '100%',
          }}
          factor={1}

        >
        </ParallaxLayer>


        <ParallaxLayer
          speed={0.6}
          style={{
            backgroundImage: `url(${midground})`,
            backgroundSize: '100%',

          }}
        ></ParallaxLayer>


        <ParallaxLayer
          speed={0.8}

          style={{
            backgroundImage: `url(${foreground})`,
            backgroundSize: '100%',
          }}
          factor={1}

        >
        </ParallaxLayer>


      </ParallaxLayer>
      <ParallaxLayer
        offset={1}> */}

      </ParallaxLayer>
    </Parallax >

  
     </div>
    )
}


export default Hero;