import React from 'react';
import './Villas.css';
import Spain from '../images/spain.jpg';

function Villas() {
    return (
        <div className="Villas">
            <div className="Villas_image">
                <img src={Spain}></img>
            </div>

            <div className="Villas_text">
                <div className="Villas_text_title"><span>Barcelona,</span> Spain</div>
                <div className="Villas_text_description"></div>
            </div>
        </div>
    )
}

export default Villas;
