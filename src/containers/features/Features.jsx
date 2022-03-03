import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Bridging the gap between AI and healthcare',
    text: 'It gives all the detailed intermediate scores of each assessment,specifying exactly the part of the body which has to be changed to make his/her ergonomics correct. The tool is built to function as a comprehensive system to prevent injuries from Industrial Jobs as well.',
  },
  {
    title: 'Forever required in IT workspaces',
    text: 'Since the concept of working in a stationary place would stay forever in the IT industry, even in an work from home environment, the validity of our product too can be trusted on',
  },
  {
    title: 'Real Time Alerts',
    text: 'Since Real-Time posture correction is being used here rather than the traditional static image analysis, the efficiency of the our product is higher than the techniques currently used in themarket',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Tech stack used :</h1>
      <p style={{marginBottom:"70px",marginTop:"10px",fontSize:"4vh"}}>Python, OpenCV, MediaPipe,  VS Code</p>
      <h1 className="gradient__text" style={{color:"white"}}>Business model :</h1>
      <p style={{marginTop:"10px"}}>Product Based Business Model</p>
      <ul style={{listStyle:"none"}}>
        <li style={{color:"white",fontFamily: "Manrope"}}>Approach 1: Contract Based Tie-up with these companies would suffice as a better business model to
          promote the product in the initial phase.
        </li>
        <li style={{color:"white",fontFamily: "Manrope"}}>Approach 2: Tie up with employee wellness programs to function as a launchpad for the product in IT
          industry
        </li>
        <li style={{color:"white",fontFamily: "Manrope"}}>Long Term Approach: Using the reputation built through approach 1 and 2 to start a new wellness company,
          having this product in the spotlight.
        </li>
      </ul>
      <p >Service Based Business Model</p>
      <ul style={{listStyle:"none"}}>
        <li style={{color:"white",fontFamily: "Manrope"}}>Tie-up with Furniture based companies to provide insights about designing a corporate ready furniture using
        the data analyzes using our product</li>
      </ul>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
