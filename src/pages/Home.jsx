import React, { useRef } from 'react';
import Hero from '../components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../styles/OurStory.module.css'


function Home() {
    const buffer = (window.innerWidth > 1800) ? 0.5 : 0; 
    const alignCenter = { 
        display: 'flex', 
        alignItems: 'center' 
      }
     
    return (
        <div>
            
        <Parallax
          pages={3 + buffer}
        >
        <Hero
            
            />
          <br 
          style={{margin: "20%;"}} 
        />
        <ParallaxLayer
          sticky={{ start: 0.5 + buffer, end: 1.2}} 
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
        offset={0.5 + buffer}  
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
      offset={1 + buffer}  
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
      sticky={{ start: 1.5 + buffer, end: 2.5}} 
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
        offset={1.5 + buffer}  
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
            offset={2 + buffer}  
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
                
                

          
            </Parallax>
                
           
        </div>
    )
};

export default Home;