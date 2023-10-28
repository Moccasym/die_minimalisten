import React from 'react';
import './CoverPage.css';


const CoverPage = () => {
  return (
    <div>
      <div>
          <hr className="lineBreak"></hr>
          <h1>Die Minimalisten</h1>
          <hr className="lineBreak"></hr>
          <p>Wir machen euch zu Minimalisten, damit ihr mehr Zeit und Geld habt</p>
          <button className="button" href="/MinimalistGuide"><span>Los Geht's</span></button>
      </div>
    </div>
  );
}

export default CoverPage;
