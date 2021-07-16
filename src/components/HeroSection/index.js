import React from 'react'
import Video from "../../videos/travel.mp4"
import {HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP
    
    } from './HeroElements'

const HeroSection = () => {
   

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Quelles déstinations fantastiques allez-vous découvrir en 2021 </HeroH1>
                    <HeroP>vous n'en reviendrez pas</HeroP>
               
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
