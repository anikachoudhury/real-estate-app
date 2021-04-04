import React from 'react';
import './Hero.css';
import China from '../images/hangzhou.jpg';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero_image">
                <img src={China} alt="The Maldives"></img>
            </div>
            <div className="Hero_text">
                <div>Specialising in luxury holiday villas.</div>
                <div className="Hero_subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                <button className="Hero_button">book a consultation</button>
            </div>
        </div>
    )
}

export default Hero;
