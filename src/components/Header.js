import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <div className="Header_logo">
                <div className="title">LUXEVLA</div>
                <div>companies</div>
            </div>
            
            <div className="Header_toggle">
                <p>toggle</p>
            </div>
        </div>
    )
}

export default Header;
