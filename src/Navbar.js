import React from 'react';
// import {Link} from 'react-router-dom';
import Image from './images/stop.jpg';

function Navbar () {
    return(
      
            <nav>
                <div className="nav-navbar-nav">
                <a href="www.google.com" className="brand-logo right">Covid-19 Tracker</a>
                <ul id="nav-mobile" className="left">
                    <img src={Image} alt="" height="65" width="70" />
                </ul>
                </div>
            </nav>
       
    )

}
export default Navbar;