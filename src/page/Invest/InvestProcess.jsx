import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investProcess.css'


const InvestProcess = ({ title, sub }) => {
  return (
    <div id='InvestProcess'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">투자 컨설팅 과정</h2>
        <div className='investprocess-image-container '>
          <img src="/img/Invest/process.png" alt="" className='first' />
        </div>
        <div className='line'></div>
        <h2 className="detail-title">제타플랜의 차별적 컨설팅</h2>
        <div className='investprocess-image-container'>
          <img src="/img/Invest/discriminatory_consulting.png" alt="" />
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestProcess;