import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
  <div className="gpt3__header-content">
  <h1 className="gradient__text">Biomechanics AI</h1>
  <p>This project aims to provide an assessment tool to assess,
  identify, eliminate hazards and risks associated with the
  ergonomics of an individual’s workstation at home.
  </p>
  
  </div>
  
  <div className="gpt3__header-image">
  <img src={ai} alt=""/>
  </div>
  </div>
  );
  
  export default Header;
  