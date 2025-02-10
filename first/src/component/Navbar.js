import React from 'react'
import '../css/Navbar.css';
import logo from '../images/itachi-uchiha-dark-3840x2160-20031.jpg' 
import {useState} from 'react';

 function Navbar() {
  const [showAbout, setShowAbout ] = useState(false);
  const [showContact, setShowContact ] = useState(false);

  const AboutClicked = () =>{
    setShowAbout(true);
    setShowContact(false);
  }
  const HomeClicked = () =>{
    setShowAbout(false);
    setShowContact(false);
  }
  const ContactClicked = () =>{
    setShowContact(true);
    setShowAbout(false);
  }
  

  return (
    <>
  <div className="container">

    {/* this is left navbar */}
    <div className="nav-left">
      <div className="nav-left-logo">
     <img src={logo} alt="logo" />
    </div>
</div>

    {/* this is right navbar */}


      <div className="nav-right">
        
        <div className="right-section">
          <ul>
            <li>
              <a href="#home" onClick={HomeClicked}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={AboutClicked}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={ContactClicked}>Contact</a>
            </li>
            <li>
              <a href="#Login">Login</a>
            </li>
            <li>
              <a href="#SignUp">SignUp</a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>

    {showAbout &&(
    <div className="about-container">

        <div className="about-section">

      
            <div className="about-content">
                  <h1>About Us</h1>
                  <p>This is the about page of our website.</p>
                          </div>
                      </div>
                  </div> 
)}


              {showContact &&(
                <div className="contact-container">

                  <div className="contact-section">

                    <div className="Contact-content">
                      <h1>Contact Us</h1>
                      <p>Our contact information is as follows:</p>
                    </div>
                  </div>
                </div>
)}
    </>
    
  )
}

export default Navbar;

