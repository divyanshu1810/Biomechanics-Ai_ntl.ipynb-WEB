import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
  <div className="gpt3__whatgpt3-feature">
  <Feature title="What is Biomechanics AI" text="It ensures that everyone can assess their postures and help them
  to correct their postures to prevent from being affected by
  Musculoskeletal Disorders." /> 
  </div>
  <div className="gpt3__whatgpt3-heading">
  <h1 className="gradient__text">MediaPipe, one of the state-of-the-art models is used in this
  tool to get precise key points (body joints).
  </h1>
  <div>
  
  <p>With an image or a video of a person captured, this application
  finds if the posture is risky or not, based on industry standard
  Ergonomics assessment techniques such as
  </p>
  <ul className='UL'>
  <li className='LI' style={{fontFamily: "Manrope"}}>Rapid Upper Limb Assessment (RULA)</li>
  <li className='LI' style={{fontFamily: "Manrope"}}>Rapid Entire Body Assessment (REBA)
  </li>
  </ul>
  </div>
  </div>
  <div className="gpt3__whatgpt3-container">
  <Feature text="This process is aided with pose estimation algorithms that use
  Deep learning models." />
  <Feature text="All assessments identify corresponding joints risk factors and
  quantify them accordingly so that the results can be compared
  and respective prescriptions for his/her ergonomics are
  provided to the user.
  " />
  <Feature text="Any Company with a stationary workplace such as Corporate
  Giants like Apple, Facebook, etc. would be our target market
  space." />
  </div>
  </div>
  );
  
  export default WhatGPT3;
  