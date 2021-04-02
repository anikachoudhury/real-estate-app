import React from 'react';
import './Hero.css';
import Maldives from '../images/maldives.jpg';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero_image">
                <img src={Maldives} alt="The Maldives"></img>
            </div>
            <div className="Hero_text">
                <h1>Specialising in luxury holiday villas.</h1>
                <h3>Choose us for a lifechanging experience.</h3>
            </div>
        </div>
    )
}

export default Hero;
