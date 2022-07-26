import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investEmpowerment.css'

const InvestEmpowerment = ({ title, sub }) => {
  return (
    <div id='InvestEmpowerment'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">역량강화</h2>
        <div className='image-container'>
          <img src="/img/Invest/empowerment.png" alt="" className='first' />
        </div>
        <div className='line'></div>
        <div className='network-consulting'>
          <h2 className="detail-title">네트워크를 활용한 컨설팅</h2>
          <section className='network-consulting-info'>
            <h3 className='company-road-part'>네트워크를 활용한 컨설팅이란?</h3>
            <p>국내벤처캐피탈, 기술금융 투융자의 현실적 추진을 통한 투자유치 목표달성</p>
          </section>
          <section className='network-consulting-info'>
            <h3 className='company-road-part'>유관기관 협력방안</h3>
            <p>금융 융자의 주력기관인 산업은행, 기업은행 기술금융부와 협업체제 구축</p>
            <p>기술금융 평가기관인 한국발명진흥회, 한국과학기술정보연구원, 기술보증기금 중앙평가원 등과 유기적인 협력체계 구축</p>
            <p>기술금융 보증・대출기관인 기보, 신보, 중진공 등과의 협력 및 기술금융 투자 벤처캐피털 15개사와 투자심의 협력이 가능</p>
          </section>
          <section className='network-consulting-info'>
            <h3 className='company-road-part last'>기술금융 연계지원 하여 투자유치관련 협의 진행 </h3>
            <p>기술금융 투융자지원 : 수진 기업 조달</p>
            <img src="/img/Invest/list01.png" alt="" />
            <p>기술금융 투자지원 : 수진 기업 조달
            </p>
            <img src="/img/Invest/list02.png" alt="" />
          </section>
        </div>
      </div>
      <DetailFooter />
    </div >
  );
};

export default InvestEmpowerment;