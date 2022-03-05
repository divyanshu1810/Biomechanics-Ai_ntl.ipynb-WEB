import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links_logo" style={{alignItems:"center"}}>
      <h1 style={{color:"white", fontFamily:"'Rokkitt', serif",fontSize:"5vh"}}>BioMechanics AI</h1>
      </div>

    <div className="gpt3__footer-copyright">
      <p style={{fontSize:"2vh",margin:"10px"}}><a href="https://github.com/OmSadavarte/Biomechanics-Ai_ntl.ipynb" rel="noreferrer" target="_blank">View Source Code</a></p>
      <p style={{fontSize:"2vh"}}>Made with ❤️ by NTL.IPYNB</p>
    </div>
  </div>
);

export default Footer;
