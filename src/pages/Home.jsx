import React, { useRef } from 'react';
import Hero from '../components/Hero'
import BackToTop from '../components/BackToTop'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../styles/OurStory.module.css'


function Home() {
    
    const offset = Math.round((window.innerWidth / 1800) * 10) /10
    const alignCenter = { 
        display: 'flex', 
        alignItems: 'center' 
      }
     
    return (
        <div>
            
        <Parallax
          pages={6}
        >
             
           
        <Hero
            offset={offset}
            />
          <br 
          style={{margin: "20%;"}} 
        />
          
        <ParallaxLayer
          sticky={{ start: 0.3 + offset, end: 2 + offset}} 
          style={{ 
          ...alignCenter, 
          justifyContent: 'flex-start' 
          }}>
        <div 
            className={`
            ${styles.card} 
            ${styles.sticky}`}>
        <img src="assets/rom.jpg" />
        </div> 
      </ParallaxLayer>
          
      <ParallaxLayer 
        offset={1.5 + (offset / 2)} 
        speed={1.5} 
        style={{ 
        ...alignCenter, 
        justifyContent: 'flex-end' 
        }}>
        <p 
          className={
            `${styles.card} 
            ${styles.parallax} 
            ${styles.purple}`}>
            On Luke and Lizzy’s first date, 
                Luke decided to make a lasting impression by 
                choking on the meal Lizzy had made him. 
                Unfortunately, this led to him throwing up, a
                nd needless to say they did not share 
                their first kiss that night.</p>
      </ParallaxLayer>
      <ParallaxLayer 
      offset={2.5 + (offset / 2)} 
      speed={1.5} 
      style={{ 
      ...alignCenter, 
      justifyContent: 'flex-end' 
      }}>
        <div 
        className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
          <p>Somehow, Lizzy had enjoyed his company 
              enough to invite him on a one week back-packing 
              trip to Algonquin. This went swimmingly, and they both 
              knew that they had found someone special. </p>
        </div>
    </ParallaxLayer>
    <ParallaxLayer 
      sticky={{ start: 3 + offset, end: 4 + offset}} 
      style={{ 
      ...alignCenter, 
      justifyContent: 'flex-start' 
      }}>
        <div 
        className={`
        ${styles.card} 
        ${styles.sticky}`}>
          <img src="assets/cocodona.jpg" />
        </div> 
      </ParallaxLayer>
      <ParallaxLayer 
        offset={3.5 + (offset / 2)} 
        speed={1.5} 
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
          visit Arizona for one of Lizzy's running races; 
          near the summit of Mount Elden, he got down on 
          one knee and asked Lizzy to spend the rest of 
          her life with him.</p>          
                </ParallaxLayer>
                <ParallaxLayer 
                  offset={4.5 + (offset / 2)} 
                  speed={1.5} 
                  style={{ 
                  ...alignCenter, 
                  justifyContent: 'flex-end' 
                  }}>
                              <div 
                  className={`
                  ${styles.card} 
                  ${styles.parallax} 
                  ${styles.blue}`}>
                    <p>The summer of 2022 saw Luke and Lizzy 
                        visit Arizona for one of Lizzy's running races; near the summit of Mount Elden, he got down on one knee and asked Lizzy to spend the rest of her life with him.</p>
                  </div>
                </ParallaxLayer>
                
                

            
             


           <BackToTop />
            </Parallax>
                
           
        </div>
    )
};

export default Home;