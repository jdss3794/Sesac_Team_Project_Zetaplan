import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import './mainSlide.css';

const MainSlide1 = () => {
  return (
    <div id='MainSlide1'>
      <div className='main-slide-wrap'>
        <div className="main-slide-night">
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
          <div className='main-slide-star'></div>
        </div>
      </div>
      <span className='main-slide-by'>
        기업성장의 성공 비즈니스 파트너
      </span>
      <div className='main-slide-title'>
        <div className='main-slide-title-wrap'>
          <span>Z</span>
          <span>E</span>
          <span>T</span>
          <span>A</span>
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>N</span>
        </div>
      </div>
      <Link to='/company' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide1;