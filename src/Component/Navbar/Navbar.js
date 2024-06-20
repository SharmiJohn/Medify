import React, { useState } from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const handleToggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
 
  return (
    <div>
      <div className="header">
        <p style={{padding:"10px"}}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
      <div className="navbar">
        <div className="imagecon"> <Link to="/"><img src={logo} alt="logo" className="logo"/></Link></div>
        <button className="mobile-menu-toggle" onClick={handleToggleMenu}>
         <IoMenu/>
        </button>
        <ul className={`list ${isMobileMenuOpen ? "open" : ""}`} >
        <li className="mobile-close">
            <button onClick={handleToggleMenu}><IoClose/></button>
          </li>

         <Link to="#"><li>Find Doctors</li></Link>   
         <Link to="./search"> <li>Hospitals</li></Link>  
         <Link to="#"><li>Medicines</li></Link>  
         <Link to="#"><li>Surderies</li></Link>   
         <Link to="#"> <li>Software for Provider</li></Link>   
         <Link to="#"><li>Facilities</li></Link>   
         <Link to="/mybookings"> <li><button>My Booking</button></li></Link>  
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
