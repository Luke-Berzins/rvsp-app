import React from 'react';
import Hero from '../components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../styles/OurStory.module.css'


function Home() {
    const buffer = (window.innerWidth > 1500) ? 0.5 : 0; 
    const alignCenter = { 
        display: 'flex', 
        alignItems: 'center' 
      }
     
    return (
      <div>
        <Parallax
          pages={3.5 + buffer}
        >
        <Hero/>
          <br 
          style={buffer ? {margin: "30%,"} : {margin: "20%,"}} 
        />
        <ParallaxLayer
          sticky={{ start: (0.5 + buffer), end: (0.7 + buffer)}} 
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-start' 
          }}>
          <div 
              className={`
              ${styles.card} 
              ${styles.sticky}`}>
          <img alt="rom" src="assets/rom.jpg" />
          </div> 
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: (1 + buffer), end: (1.3 + buffer)}} 
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-start' 
          }}>
          <div 
              className={`
              ${styles.card} 
              ${styles.sticky}`}>
          <img alt="rom-photo" src="IMG_0938.jpg" />
          </div> 
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: (1.6 + buffer), end: (1.9 + buffer)}} 
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-start' 
          }}>
          <div 
              className={`
              ${styles.card} 
              ${styles.sticky}`}>
          <img alt="cocodona" src="assets/cocodona.jpg" />
          </div> 
        </ParallaxLayer>
        <ParallaxLayer 
          sticky={{ start: (2.2 + buffer), end: (2.5 + buffer)}} 
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-start' 
          }}>
            <div 
            className={`
            ${styles.card} 
            ${styles.sticky}`}>
            <img alt="cocodona" src="snow-lizzy.png" />
          </div> 
        </ParallaxLayer> 
        <ParallaxLayer 
          offset={(0.55 + buffer)}  
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-end' 
          }}>
          <p 
            className={
             `${styles.card} 
              ${styles.parallax}`}>
              On Luke and Lizzy’s first date, 
                  Luke decided to make a lasting impression by 
                  choking on the meal Lizzy had made him. 
                  Unfortunately, this led to him throwing up, and 
                  needless to say they did not share 
                  their first kiss that night.</p>
        </ParallaxLayer>
      <ParallaxLayer 
      offset={(1 + buffer)}  
      style={{ 
      ...alignCenter, 
      justifyContent: 'flex-end' 
      }}>
        <p 
        className={`${styles.card} 
                    ${styles.parallax}`}
          >Somehow, Lizzy had enjoyed his company 
              enough to invite him on a one week back-packing 
              trip to Algonquin. This went swimmingly, and they both 
              knew that they had found someone special.
        </p>
    </ParallaxLayer>
    <ParallaxLayer 
      offset={(1.6 + buffer)}  
      style={{ 
      ...alignCenter, 
      justifyContent: 'flex-end' 
      }}>
        <p
        className={`
        ${styles.card} 
        ${styles.parallax} 
        `}
        >The summer of 2022 saw Luke and Lizzy 
        visit Arizona for one of Lizzy&apos;s running races.
        Near the summit of Mount Elden, he got down on 
        one knee and asked Lizzy to spend the rest of 
        her life with him.
        </p>          
      </ParallaxLayer>
        <ParallaxLayer 
          sticky={{ start: (2.2 + buffer), end: (2.5 + buffer)}}
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-end' 
          }}>
          <p
          className={`
          ${styles.card} 
          ${styles.parallax}`}>They look forward to embarking on new and exciting adventures, 
            which they plan to share with their loved ones and closest friends.
          </p>
        </ParallaxLayer>
      </Parallax>       
    </div>
  )
}

export default Home;