import React from 'react';
import {apple,facebook, google, mslogo, atlassian} from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img style={{width:"40px"}} src={facebook} alt=""/>
    </div>
    <div>
      <img style={{width:"140px"}} src={mslogo} alt=""/>
    </div>
    <div>
      <img src={google} alt="" />
    </div>
    <div>
      <img src={atlassian} alt=""/>
    </div>
    <div>
      <img style={{width:"40px"}} src={apple} alt=""/>
    </div>
  </div>
);

export default Brand;
