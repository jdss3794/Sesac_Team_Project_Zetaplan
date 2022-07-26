import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investPlan.css'


const InvestPlan = ({ title, sub }) => {
  return (
    <div id='InvestPlan'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">사업계획서/IR</h2>
        <div className='investplan-image-container'>
          <h2 className='company-road-part'>투자 IR 사업계획서 </h2>
          <img src="/img/Invest/plan.png" alt="" />
        </div>
        <div className='analysis'>
          <section className='section'>
            <h2 className='company-road-part'>기업분석</h2>
            <p>체크리스트 진단을 통해 종합적인 기업분석 전략보고서가 만들어지고, 내부적으로 임직원이 향후 기업의 향방 및 진로를 결정하는데 보다 도움이 될 수 있도록 구성합니다.</p>
            <p>기업성공 전략계획 수립</p>
            <p>기업의 IR을 위한 기본 사업계획서 작성</p>
            <p>기업지원을 위한 기초자료로 활용</p>
          </section>
          <section className='section'>
            <h3 className='company-road-part'>작성주체</h3>
            <p> [기업+파트너+기타] →단계별로 각 주체가 관련 내용 확인하여 최종완성</p>
          </section>
          <section className='section'>
            <h3 className='company-road-part'>작성기간</h3>
            <p>1~2개월 소요</p>
          </section>
          <section className='section s4'>
            <ul>
              <span>기업요약</span>
              <li>– 보유기술</li>
              <li>– 회사현황</li>
              <li>– 사업추진 단계</li>
              <li>– 사업화 발전 계획</li>
            </ul>
            <ul>
              <span>외부환경/내부역량/사업전략</span>
              <li>– 분석요약</li>
              <li>– 기준에 따른 평점제시</li>
              <li>– 파트별 분석내용 활용법</li>
              <li>– 기술분석 및 기술가치평가</li>
            </ul>
            <ul>
              <span>재무분석</span>
              <li>– 추정재무제표</li>
              <li>– 기업 활용 재무프로그램제시</li>
              <li>– 투자유치를 위한 기업가치평가</li>
            </ul>
            <ul>
              <span>기업 발전을 위한 제안</span>
              <li>– 기술개발로드맵</li>
              <li>– 사업화로드맵</li>
              <li>– 성공을 위한 분석자 및 전문컨설턴트의 의견</li>
            </ul>
          </section>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestPlan;