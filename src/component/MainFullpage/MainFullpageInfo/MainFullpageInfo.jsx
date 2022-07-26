import React from 'react';
import './mainFullpageInfo.css';
import { ImArrowRight2 } from 'react-icons/im';
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
              <h2>투자IR</h2>
              <p className='info-detail'>
                국,내외 투자기관 네트워크로 최적의 IR 지원
              </p>
              <div className='detail-box'>
                <a href='/invest/result'>
                  <p>
                    <ImArrowRight2 /> <span id='blind'>자세히보기</span>
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>M&A</h2>
              <p className='info-detail'>
                {' '}
                제휴 네트워크의 IB, 로펌, 회계법인으로 구성된 최고의 M&A
                팀
              </p>
              <div className='detail-box'>
                <a href='/mna'>
                  <p>
                    {' '}
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /><span id='blind'>자세히보기</span>
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='navy'>
              <h2>IPO</h2>
              <p className='info-detail'>
                체계적인 분석으로 최적의 IPO 절차 컨설팅 제공{' '}
              </p>
              <div className='detail-box'>
                <a href='/ipo'>
                  <p>
                    <ImArrowRight2 /> <span id='blind'>자세히보기</span>
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>해외진출</h2>
              <p className='info-detail'>단계별 KEY Module 해법제공</p>
              <div className='detail-box'>
                <a href='/abroad/process'>
                  <p>
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /> <span id='blind'>자세히보기</span>
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='navy'>
              <h2>경영컨설팅</h2>
              <p className='info-detail'>
                `비용의 최소화 및 이익의 최대화` 비즈니스 컨설팅
              </p>
              <div className='detail-box'>
                <a href='/invest'>
                  <p>
                    <ImArrowRight2 /><span id='blind'>자세히보기</span>
                  </p>
                </a>
              </div>
            </div>
            <div className='ir-box' id='ivy'>
              <h2>서브사업</h2>
              <div className='detail-box'>
                <a href='#'>
                  <p>
                    <ImArrowRight2 fill='rgb(43, 53, 64)' /> <span id='blind'>자세히보기</span>
                  </p>
                </a>
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
