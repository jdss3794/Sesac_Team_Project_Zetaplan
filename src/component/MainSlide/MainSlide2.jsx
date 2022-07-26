import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

const MainSlide2 = () => {
  return (
    <div id='MainSlide2'>
      <div className='main-slide-wrap'></div>
      <span className='main-slide-by'>기업성장의 성공 비즈니스 파트너</span>
      <div className='main-slide-title'>경영컨설팅 전문 기업</div>
      <Link to='/invest' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide2;