import React from 'react';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

const MainSlide3 = () => {
  return (
    <div id='MainSlide3'>
      <div className='main-slide-wrap'></div>
      <span className='main-slide-by'>기업성장의 성공 비즈니스 파트너</span>
      <div className='main-slide-title'>약 2,600개사 컨설팅 진행</div>
      <Link to='/notice/info' className='main-slide-btn'><GrNext size='30px' />More</Link>
    </div>
  );
};

export default MainSlide3;