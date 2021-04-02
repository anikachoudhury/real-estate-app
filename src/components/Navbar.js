import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_logo">
                LUXEVLA
            </div>

            <div className="Navbar_links">
                <a>
                    Home
                </a>
                <a>
                    Services
                </a>
                <a>
                    Contact
                </a>
            </div>

            <div className="Navbar_toggle">

            </div>
        </div>
    )
}

export default Navbar;
