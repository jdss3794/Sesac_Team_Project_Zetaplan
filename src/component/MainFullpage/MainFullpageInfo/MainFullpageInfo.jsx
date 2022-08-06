import React from 'react';
import './mainFullpageInfo.css';
import { ImArrowRight2 } from 'react-icons/im';
import { BsArrowRightSquare } from 'react-icons/bs';
import {AiOutlineBank, AiOutlineBarChart, AiOutlineFileText, AiOutlineLineChart} from 'react-icons/ai';
import {IoMdAirplane} from 'react-icons/io';
import AOS from "aos"; 
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { GrNext } from 'react-icons/gr';
import AnimatedNumbers from "react-animated-numbers";
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const MainFullpageInfo = () => {
  
  useEffect(() => {
    AOS.init({
        duration : 2000
    });
});

const [num1, setNum1] = React.useState(327);
const [num2, setNum2] = React.useState(152);
const [num3, setNum3] = React.useState(54);
const [num4, setNum4] = React.useState(89);
const [num5, setNum5] = React.useState(5231);


 
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
        <div class="layout_section main_business">
                    <ul class="business_list"  data-aos='fade-up'>
                        <li id='ir-box'>
                        <a href="/invest/result" class="business_link">
                            <div class="business_cont" >
                              <AiOutlineLineChart id="info-icons"/>
                                <p>투자IR</p>
                                <p className='big-txt'>
                                <AnimatedNumbers
                                  includeComma
                                  animateToNumber={num1}
                                  configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                  ]}
                                ></AnimatedNumbers> 
                                <span className='small-txt'>건</span>
                                </p>
                            </div>
                        </a>
                        <a href="/invest/result" class="business_link">
                            <div class="business_box" id='ir-hover'>
                                    <dl>
                                        <dt>투자IR</dt>
                                        <dd>
                                        국,내외 투자기관 네트워크로 <br />
                                        최적의 IR을 지원합니다
                                        </dd>
                                        <IoIosArrowDroprightCircle size={"30px"} />
                                    </dl>
                            </div>
                        </a>
                        </li> 
                        <li id='ma-box'>
                        <a href="/mna" class="business_link">
                            <div class="business_cont">
                            <AiOutlineBank id="info-icons" />
                                <p>M&A</p>
                                <p className='big-txt'>
                                <AnimatedNumbers
                                  includeComma
                                  animateToNumber={num2}
                                  configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                  ]}
                                ></AnimatedNumbers> 
                                <span className='small-txt'>건</span>
                                </p>
                            </div>
                            </a>
                            <a href="/mna" class="business_link">
                            <div class="business_box" id='ma-hover'>
                                    <dl>
                                        <dt>M&A</dt>
                                        <dd>
                                        제휴 네트워크의 IB, 로펌, <br /> 회계법인으로
                                        구성된  <br /> 최고의 M&A 팀 
                                        </dd>
                                        <IoIosArrowDroprightCircle size={"30px"} />
                                    </dl>
                            </div>
                            </a>
                        </li>
                        <li id='ipo-box'>
                        <a href="/ipo" class="business_link">

                            <div class="business_cont">
                            <AiOutlineBarChart id="info-icons"/>
                                <p>IPO</p>
                                <p className='big-txt'>
                                <AnimatedNumbers
                                  includeComma
                                  animateToNumber={num3}
                                  configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                  ]}
                                ></AnimatedNumbers> 
                                <span className='small-txt'>건</span>
                                </p>
                            </div>
                            </a>
                    
                            <a href="/ipo" class="business_link">
                             <div class="business_box" id='ipo-hover'>  
                                    <dl>
                                        <dt>IPO</dt>
                                        <dd>
                                        체계적인 분석으로 <br />
                                        최적의 IPO 절차 <br />
                                        컨설팅을 제공합니다
                                        </dd>
                                        <IoIosArrowDroprightCircle size={"30px"} />
                                    </dl>
                              </div>
                            </a>
                        </li>
                        <li id='abroad-box'>
                        <a href="/abroad/process" class="business_link">

                            <div class="business_cont">
                            <IoMdAirplane id="info-icons"/>
                                <p>해외진출</p>
                                <p className='big-txt'>
                                <AnimatedNumbers
                                  includeComma
                                  animateToNumber={num4}
                                  configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                  ]}
                                ></AnimatedNumbers> 
                                <span className='small-txt'>건</span>
                                </p>
                            </div>
                            </a>
                            <a href="/abroad/process" class="business_link">
                            <div class="business_box" id='abroad-hover'>
                                    <dl>
                                        <dt>해외진출</dt>
                                        <dd>
                                        단계별 KEY Module <br />
                                        해법을 제공하여<br />
                                        성공적인 해외진출
                                        </dd>
                                        <IoIosArrowDroprightCircle size={"30px"} />

                                    </dl>
              
                            </div>
                            </a>
                        </li>
                        <li id='business-box'>
                        <a href="/invest" class="business_link">
                            <div class="business_cont">
                            <AiOutlineFileText id="info-icons"/>
                                <p>경영컨설팅</p>
                                <p className='big-txt'>
                                <AnimatedNumbers
                                  includeComma
                                  animateToNumber={num5}
                                  configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                  ]}
                                ></AnimatedNumbers> 
                                <span className='small-txt'>건</span>
                                </p>
                            </div>
                            </a>
                            <a href="/invest" class="business_link">
                            <div class="business_box" id='business-hover'>
                                    <dl>
                                        <dt>경영컨설팅</dt>
                                        <dd>
                                        비용의 최소화 및  <br />
                                        이익의 최대화를 실현하는 <br />
                                        비즈니스 컨설팅
                                        </dd>
                                        <IoIosArrowDroprightCircle size={"30px"} />

                                    </dl>
                            </div>
                           </a>
                        </li>
                    </ul>
          <ul className='sub-ul' data-aos='fade-up'>
            <li className='sub-li' data-aos='fade-up'>
            <div className='detail-box'>
                <a href='/industry/trade'>
                  <p>
                   <span id='sub-detail'>기술거래 <GrNext size='1.8rem' id='more-icon' fill='#efefef' /> </span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li'  data-aos='fade-up'>
            <div className='detail-box'>
                <a href='/industry/value'>
                  <p>
                   <span id='sub-detail'>가치평가 <GrNext size='1.8rem' fill='#efefef' id='more-icon'/></span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li'  data-aos='fade-up'>
            <div className='detail-box'>
                <a href='/industry/credit'>
                  <p>
                   <span id='sub-detail'>신용평가 <GrNext size='1.8rem' fill='#efefef' id='more-icon'/></span>
                  </p>
                </a>
              </div>
            </li>
            <li className='sub-li' data-aos='fade-up' >
            <div className='detail-box'>
                <a href='/industry/confirm'>
                  <p>
                   <span id='sub-detail'>기업인증 </span>
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainFullpageInfo;
