import React from 'react';
import Header from '../../Header/Header';
import MainSlide from '../../MainSlide/MainSlide';
import './mainfullgemain.css';

const MainFullgeMain = () => {
  const slides = [
    {
      des: 'ZetaPlan',
      company: 'zetaPlanInvestment',
      img: '/img/mainFullpage/mainbanner0.png',
    },
    {
      des: '경영컨설팅 전문 기업',
      company: 'zetaPlanInvestment',
      img: '/img/mainFullpage/mainbanner1.png',
    },
    {
      des: '약 2600개사 컨설팅 진행',
      company: 'zetaPlanInvestment',
      img: '/img/mainFullpage/mainbanner2.png',
    },
    {
      des: '다양한 인프라로 성공 지원',
      company: 'zetaPlanInvestment',
      img: '/img/mainFullpage/mainbanner3.png',
    }
  ];

  return (
    <div id='MainFullgeMain'>
      <Header />
      <MainSlide slides={slides} />
    </div>
  );
};


export default MainFullgeMain;