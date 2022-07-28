import React, { useState } from 'react';
import './Scss/About.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import Img1 from './images/p1.png';
import Img2 from './images/p2.png';
import Img3 from './images/p3.png';
import Video from './video/Munis2.mp4'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useTranslation } from 'react-i18next';

const About = ({ english, uzbek, russian }) => {

    const {t} = useTranslation()

    const options = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
          src: Video,
          type: 'video/mp4'
        }]
      };
    
      const onReady = (player) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on('waiting', () => {
          player.log('player is waiting');
        });
    
        player.on('dispose', () => {
          player.log('player will dispose');
        });
      };
    
        const videoRef = React.useRef(null);
        const playerRef = React.useRef(null); 
    
        React.useEffect(() => {
    
            // Make sure Video.js player is only initialized once
            if (!playerRef.current) {
            const videoElement = videoRef.current;        
    
            if (!videoElement) return;
    
            const player = playerRef.current = videojs(videoElement, options, () => {
                player.log('player is ready');
                onReady && onReady(player);
            });
    
            // You can update player in the `else` block here, for example:
            } else {
            // const player = playerRef.current
            // player.autoplay(options.autoplay);
            // player.src(options.sources);
            }
        }, [options, videoRef]);        
    
        // Dispose the Video.js player when the functional component unmounts
        React.useEffect(() => {
            const player = playerRef.current;
    
            return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
            };
        }, [playerRef]);

    return (
        <>
            <div className={`About`}>
                <div className='wrapper1'>                    
                    <div className='col-md-12'>                        
                         <div className='video'>
                            <div data-vjs-player>
                                <video ref={videoRef} className='video-js vjs-big-play-centered' />
                            </div>
                         </div>
                        <h1 className={`name text-center`}>{t(21)}</h1>
                        {english &&
                            <p>Our company has been on the market since 2012.

                            We value each of our clients, so the high quality of service is
                            priority for us. You can always ask your questions
                            online or by phone and get detailed advice
                            
                            A team of professionals monitors the constant replenishment and updating
                            assortment, development of promotions and a system of favorable discounts,
                            informing our customers about new products. Employees
                            undergo thorough training, improve their skills and knowledge,
                            undergo special courses and trainings to keep up with the times.
                            
                            We work with more than 120 cities in Russia and CIS countries. Geography of our
                            sales are expanding annually.
                            
                            Our mission is to constantly develop and improve the quality of our products.
                            through the introduction of innovative technologies. Making the world better
                            and people: customers, employees and others are happier.
                            
                            In our activities, our company is guided by the principle -
                            “Minimize the negative impact on the environment”, therefore
                            Responsible attitude to the environment is one of the company's priorities.</p>                    
                        }
                        {russian &&
                            <h5>Our company has been on the market since 2012.

                            We value each of our clients, so the high quality of service is
                            priority for us. You can always ask your questions
                            online or by phone and get detailed advice
                            
                            A team of professionals monitors the constant replenishment and updating
                            assortment, development of promotions and a system of favorable discounts,
                            informing our customers about new products. Employees
                            undergo thorough training, improve their skills and knowledge,
                            undergo special courses and trainings to keep up with the times.
                            
                            We work with more than 120 cities in Russia and CIS countries. Geography of our
                            sales are expanding annually.
                            
                            Our mission is to constantly develop and improve the quality of our products.
                            through the introduction of innovative technologies. Making the world better
                            and people: customers, employees and others are happier.
                            
                            In our activities, our company is guided by the principle -
                            “Minimize the negative impact on the environment”, therefore
                            Responsible attitude to the environment is one of the company's priorities.</h5>
                        }
                        {uzbek &&
                            <h5>Our company has been on the market since 2012.

                            We value each of our clients, so the high quality of service is
                            priority for us. You can always ask your questions
                            online or by phone and get detailed advice
                            
                            A team of professionals monitors the constant replenishment and updating
                            assortment, development of promotions and a system of favorable discounts,
                            informing our customers about new products. Employees
                            undergo thorough training, improve their skills and knowledge,
                            undergo special courses and trainings to keep up with the times.
                            
                            We work with more than 120 cities in Russia and CIS countries. Geography of our
                            sales are expanding annually.
                            
                            Our mission is to constantly develop and improve the quality of our products.
                            through the introduction of innovative technologies. Making the world better
                            and people: customers, employees and others are happier.
                            
                            In our activities, our company is guided by the principle -
                            “Minimize the negative impact on the environment”, therefore
                            Responsible attitude to the environment is one of the company's priorities.</h5>
                        }
                    </div>
                    <div className='row partners'>
                        <h1 className='text-center mb-5'>Our Partners</h1>
                        <div className='col-4'>
                            <img src={Img1} />
                        </div>
                        <div className='col-4 border border-dark border-top-0 border-bottom-0'>
                            <img src={Img2} />
                        </div>
                        <div className='col-4'>
                            <img src={Img3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;