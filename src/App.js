import React from 'react';

import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Blog />
    <Footer />
  </div>
);

export default App;
