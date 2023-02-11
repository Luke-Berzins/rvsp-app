import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax'
import '../styles/Hero.css'
const sky =  '/parallax/sky.png'
const background =  '/parallax/background.png'
const midground =  '/parallax/midground.png'
const foreground =  '/parallax/foreground.png'


function Hero( { offset } ) {


  return (
    <div>
      <ParallaxLayer 
        offset={offset / 8}
      >
        <ParallaxLayer
            speed={0.1}
            style={{
            backgroundImage: `url(${sky})`,
            backgroundSize: '100%',
        }}>
        </ParallaxLayer>
        <ParallaxLayer
           speed={0.3}
           style={{
             backgroundImage: `url(${background})`,
             backgroundSize: '100%',
           }}>
         </ParallaxLayer>
         <ParallaxLayer
           speed={0.6}
           style={{
             backgroundImage: `url(${midground})`,
             backgroundSize: '100%',
           }}>
         </ParallaxLayer>
         <ParallaxLayer
           speed={0.8}
           style={{
             backgroundImage: `url(${foreground})`,
             backgroundSize: '100%',
            }}>
        </ParallaxLayer>
        </ParallaxLayer>
     </div>
    )
}


export default Hero;