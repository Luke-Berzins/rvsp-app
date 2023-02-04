import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../styles/OurStory.module.css'
import Hero from './Hero'

function Ourstory() {

    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div>
        <Parallax
                pages={5}
             >

        <Hero />
        
        <ParallaxLayer offset={0} speed={0.5} >
            <h3 className={styles.scrollText}>OUR STORY</h3>
        </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className={`${styles.card} ${styles.sticky}`}>
          <p>I'm a sticky layer</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
          <p>On Luke and Lizzy’s first date, Luke decided to make a lasting impression by choking on the meal Lizzy had made him. Unfortunately, this led to him throwing up, and needless to say they did not share their first kiss that night.</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
          <p>Somehow, Lizzy had enjoyed his company enough to invite him on a one week back-packing trip to Algonquin. This went swimmingly, and they both knew that they had found someone special. </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
          <p>The summer of 2022 saw Luke and Lizzy visit Arizona for one of Lizzy's running races; near the summit of Mount Elden, he got down on one knee and asked Lizzy to spend the rest of her life with him.</p>
        </div>
      </ParallaxLayer>
      
             </Parallax>
      </div>
       
    )
} 

export default Ourstory;