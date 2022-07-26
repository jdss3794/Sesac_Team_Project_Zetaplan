import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investStrategy.css'
import { IoIosArrowForward } from 'react-icons/io';


const InvestStrategy = ({ title, sub }) => {
  return (
    <div id='InvestStrategy'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">전략수립</h2>
        <section className='strategy1'>
          <h3 className='company-road-part'> 기업진단 및 기업전략 분석자문</h3>
          <div className='strategy-container1'>
            <div className='strategy-circle1'>
              <span className='strategy-num1'>1차</span>
              <p className='strategy-des1'>예비진단</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle1'>
              <span className='strategy-num1'>2차</span>
              <p className='strategy-des1'>현금흐름</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle1'>
              <span className='strategy-num1'>3차</span>
              <p className='strategy-des1'>외부환경</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle1'>
              <span className='strategy-num1'>4차</span>
              <p className='strategy-des1'>내부환경</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle1'>
              <span className='strategy-num1'>5차</span>
              <p className='strategy-des1'>사업전략</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle1'>
              <span className='strategy-num1'>6차</span>
              <p className='strategy-des1'>재무재표</p>
            </div>
          </div>
        </section>
        <section className='strategy2'>
          <h3 className='company-road-part'> 재무분석 및 투자유치 IR 컨설팅</h3>
          <div className='strategy-container1'>
            <div className='strategy-circle2'>
              <span className='strategy-num1'>1차</span>
              <p className='strategy-des1'>예비진단</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle2'>
              <span className='strategy-num1'>2차</span>
              <p className='strategy-des1'>재무분석</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle2'>
              <span className='strategy-num1'>3차</span>
              <p className='strategy-des1'>투자유치준비</p>
            </div>
            <IoIosArrowForward id='strategy-arrow' />
            <div className='strategy-circle2'>
              <span className='strategy-num1'>4차</span>
              <p className='strategy-des1'>투자유치 실행/IPO</p>
            </div>
          </div>
        </section>
      </div>


      <DetailFooter />
    </div>
  );
};

export default InvestStrategy;