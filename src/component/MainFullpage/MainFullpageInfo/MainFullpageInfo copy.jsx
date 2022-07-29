import React from 'react';
import './mainFullpageInfo.css';
import { ImArrowRight2 } from 'react-icons/im';
import {AiOutlineBank, AiOutlineBarChart, AiOutlineFileText, AiOutlineLineChart} from 'react-icons/ai';
import {IoMdAirplane} from 'react-icons/io';
import AOS from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MainFullpageInfo = () => {
  useEffect(() => {
    AOS.init({
        duration : 2000
    });
});

  return (
    <div id='fullpageInfo'>
      <div id='MainInner'>

        <div className="main-info-container">
        <div className='main-info-title-box'>
            <h2 className='main-info-title'>
              <span> BUSINESS</span>
              사업소개
            </h2>
          </div>
        <div className='main-info-box'>
       
          <div className='fullpageInfo-boxs'  data-aos="fade-up">
            <div className='ir-box' id='navy'>
            <a href='/invest/result'>
              <h2>투자IR</h2>
              <p className='info-detail'>
                국,내외 투자기관 네트워크로 최적의 IR 지원
              </p>
              <div className='detail-box'>
                 <p>
                   {/*  <ImArrowRight2 /> */} <span id='blind'><AiOutlineLineChart id="info-icons"/></span>
                  </p>
                </div>
              </a>
            </div>
            <div className='ir-box' id='ivy'>
            <a href='/mna'>
              <h2>M&A</h2> 
              <p className='info-detail'>
                  제휴 네트워크의 IB, 로펌, 회계법인으로 구성된 최고의 M&A
                팀
              </p>
              <div className='detail-box'>
                  <p>
                    {/* <ImArrowRight2 fill='rgb(43, 53, 64)' /> */}    <AiOutlineBank id="info-icons" /><span id='blind'>571 건</span>
                  </p>
               
              </div>
              </a>
            </div>
            <div className='ir-box' id='navy'>
             <a href='/ipo'>
              <h2>IPO</h2> <AiOutlineBarChart id="info-icons"/>
              <p className='info-detail'>
                체계적인 분석으로 최적의 IPO 절차 컨설팅 제공
              </p>
              <div className='detail-box'>
                  <p>
                   {/*  <ImArrowRight2 />  */}<span id='blind'>77 </span><span id='light-txt'>건</span> 
                  </p>
              </div>
              </a>
            </div>
            <div className='ir-box' id='ivy'>
            <a href='/abroad/process'>
              <h2>해외진출</h2><IoMdAirplane id="info-icons"/>
              <p className='info-detail'>단계별 KEY Module 해법제공</p>
              <div className='detail-box'>
                  <p>
                   {/*  <ImArrowRight2 fill='rgb(43, 53, 64)' /> */} <span id='blind'>자세히보기</span>
                  </p>
              </div>
              </a>
            </div>
            <div className='ir-box' id='navy'>
            <a href='/invest'>
              <h2>경영컨설팅</h2><AiOutlineFileText id="info-icons"/>
              <p className='info-detail'>
                비용의 최소화 및 이익의 최대화 비즈니스컨설팅
              </p>
              <div className='detail-box'>              
                  <p>
                    {/* <ImArrowRight2 /> */}<span id='blind'>자세히보기</span>
                  </p>
              </div>
            </a>
            </div>
            <div className='ir-box' id='ivy'>
              <div className='sub-box'>
              <div className='detail-box1'>
                <a href='/industry/trade'>
                  <p>
                   <span id='sub-detail'>기술거래</span>
                  </p>
                </a>
              </div>
              <div className='detail-box1'>
                <a href='/industry/value'>
                  <p>
                   <span id='sub-detail'>가치평가</span>
                  </p>
                </a>
              </div>
              <div className='detail-box1'>
                <a href='/industry/credit'>
                  <p>
                   <span id='sub-detail'>신용평가</span>
                  </p>
                </a>
              </div>
              <div className='detail-box1'>
                <a href='/industry/confirm'>
                  <p>
                   <span id='sub-detail'>기업인증</span>
                  </p>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainFullpageInfo;
