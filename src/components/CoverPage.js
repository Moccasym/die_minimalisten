import React from 'react';
import './Navbar';


const CoverPage = () => {
  return (
    <div>
    
    <div className="bg-navy vh-100 flex items-center justify-center">
      <div className="tc">
        <h1 className="f1 yellow">Die Minimalisten</h1>
        <p className="f4 yellow">Wir machen euch zu minimalisten, damit ihr mehr Zeit und Geld habt</p>
        <button className="f5 link dim br2 ph5 pv2 mb2 dib near-white bg-dark-green" href="/MinimalistGuide">Los Geht's</button>
      </div>
    </div>
    </div>
  );
}

export default CoverPage;
