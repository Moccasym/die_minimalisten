import React from 'react';
import 'tachyons';
import './App.css';
import './components/MinimalistGuide.js'
import MinimalistGuide from './components/MinimalistGuide.js';
import CoverPage from './components/CoverPage.js';
import Socials from './components/Socials.js';


import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <CoverPage />
      <MinimalistGuide />
      <Socials />
    </Router>
    
  );
}

export default App;
