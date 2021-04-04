import React, { useState } from 'react';
import './Header.css';

function Header() {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="Header">
            <div className="Header_logo">
                <div className="title">LUXEVLA</div>
                <div>lettings</div>
            </div>
            
            <div className={toggle ? "Header_menu active" : "Header_menu"} onClick={handleClick}>
                <div className="Header_menu_hamburger1"></div>
                <div className="Header_menu_hamburger2"></div>
                <div className="Header_menu_hamburger3"></div>
            </div>

            {/* <div className="Header_menu active">
                <a className="link1_inactive">Home</a>
                <a className="link2_inactive">Services</a>
                <a className="link3_inactive">Contact</a>
            </div> */}
        </div>
    )
}

export default Header;
