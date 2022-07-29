import React from 'react';
import './MainFullPageAbroad.css';
import AOS from "aos"; 
import "aos/dist/aos.css";

const MainFullPageAbroad = () => {
  return (
    <div id="fullpageAbroad">
      <div id="MainInner">
        <div className="main-abroad-container">
          <h2 className='main-abroad-title'>
            해외진출
            <span>ABROAD</span>
          </h2>
          <div className="abroad-bg" data-aos='fade-up'></div>
        </div>
      </div>
    </div>
  );
};

export default MainFullPageAbroad;