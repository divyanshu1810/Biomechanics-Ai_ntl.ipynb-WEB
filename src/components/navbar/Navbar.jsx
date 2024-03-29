import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1 style={{color:"white", fontFamily:"'Rokkitt', serif"}}>BioMechanics AI</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">About us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button"><a href="https://www.youtube.com/watch?v=7lQeOs0BCfw">Demo</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">About us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <button type="button"><a href="https://www.youtube.com/watch?v=7lQeOs0BCfw">Demo</a></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
