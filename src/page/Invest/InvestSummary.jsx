import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import '../../css/Invest/investSummary.css'

const InvestSummary = ({ title, sub }) => {
  return (
    <div id='InvestSummary'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">투자IR 컨설팅 개요</h2>
        <section className='summary'>
          <h3 className='company-road-part'>컨설팅 개요</h3>
          <span>우수한 기업의 투자IR 및 사업화 지원기관 네트워크를 통해 투자유치 희망기업의 요구에 부합하는 컨설팅 </span>
          <p>벤처캐피탈 등 당사의 국,내외 투자기관 네트워크를 통한 IR 지원과 1:1 투자유치 매칭 지원</p>
          <p>투자 유치 희망기업의 경영진단에서부터 사후관리까지 일관되고 체계적인 컨설팅 지원내용의 확보와 사업추진 계획</p>
          <p>컨설팅 진행기간 이후에도 희망기업이 지속적인 성장을 위한 투자유치 컨설팅 및 향후 기업공개에 이를 수 있도록 컨설팅 지원</p>
        </section>
        <section className='summary'>
          <h3 className='company-road-part'> 컨설팅 내용 </h3>
          <p>기업진단, 개선전략 수립 및 IR멘토링을 통해 기업역량강화 및 투자유치를 위한 신뢰성 있는 IR자료 작성</p>
          <p>투자유치전략 수립 및 투자성사 업무지원을 통하여 성장전략 지원</p>
          <div className='investsummary-image-container'>
            <img src="/img/Invest/consulting_content.png" alt="" />
          </div>
        </section>
        <div className='line'></div>
        <section className="invest-title-container-success">
          <h2 className="detail-title">투자유치 성공사례</h2>
        </section>
        <section className='summary'>

          <span > (주)00일렉콤 전자파 차폐,그라운드 접지, 방열, 전자파 흡수용도 제품 기술보유기업 투자유치 및 성과</span>
          <ul>
            <li>컨설팅 내용 : 전자파 차폐, 흡수 관련 제품 기술보유기업의 IR을 통한 투자</li>
            <li>투자 컨설팅 : 중국 신설법인 확대 및 기존 TV 등 대형 전자제품외 모바일 기기관련 제품으로 생산라인확대, 성장을 위한 로드맵 전략자문 및 투자자금지원을 위한 투자 IR 컨설팅</li>
            <li>진행경과 : 2015년 4월부터 주요 기관투자자들에 대한 IR 실시</li>
            <li>투자유치 : 2015년 7월 스마일게이트인베스트먼트, 대성창업투자주식회사로 부터 30억원 투자유치 (CB)</li>
            <li>사후결과 : 모바일 기기로의 생산라인 확대 및 해외사업성장에 따른 중국 투자협상 진행 중</li>
          </ul>
        </section>
        <section className='summary'>
          <span>(주)000에프앤피 재무컨설팅 자문 및 투자유치</span>
          <ul>
            <li>컨설팅 내용 : 스마트웰빙∙건강기능식품기업의 IR을 통한 투자유치</li>
            <li>투자 컨설팅 : 건강기능식품 원료 기술개발 및 의료바이오 약품시장 진출, 해외시장진출을 위한 전략자문과 기업성장을 위한 적시의 투자자금 조달</li>
            <li>진행경과 : 2015년 4월부터 주요 기관투자자대상 IR 실시, 중국상장기업 ‘중국피혁성’과 투자협의</li>
            <li>투자유치 : 20억 투자유치</li>
            <li>– 10억 SBI 코넥스활성화펀드 (RCPS)</li>
            <li>– 10억 IBK 금융그룹에서 투자유치 (BW)</li>
            <li>사후결과 : 면세점, 홈쇼핑 마케팅 입점지원 및 중국투자 유치 관련 진행 중, 2015년 7월 코넥스 상장</li>
          </ul>
        </section>
        <section className='summary'>
          <span>(주)000월드와이드 의료기술 보유기업의 투자유치 및 성과</span>
          <ul>
            <li>컨설팅 내용 : 골다공증진단기기, 뇌혈관진단기기 등 세계최고등급 기술 보유기업의 글로벌 사업확장에 대한  IR 및 투자유치 지원</li>
            <li>투자 컨설팅 : GE(General Electric) 세계1위 의료기업과 공동개발 및 납품 및 해외 지사설립과 마케팅다변화를 위한 IR 실행</li>
            <li>진행경과 : KITIA를 통한 투자기관 선정지원, IR컨설팅</li>
            <li>투자유치 : 산업은행 기술금융 특허담보대출 15억 완료, LB/송현/알바트로스 인베스트먼트 3개사와 투자 협의 중 (50억 규모)</li>
            <li>사후결과 : GE사 ODM/OEM 개발 및 104개국 매출증대 예상</li>
          </ul>
        </section>
        <section className='summary'>
          <span>차세대 UI 솔루션 보유기업 000정보통신(주) 투자유치 </span>
          <ul>
            <li>컨설팅 내용 : 차세대 RIA 솔루션 기술의 보급과 기업공개(IPO)전 투자 유치</li>
            <li>투자 컨설팅 : 한국거래소(KRX) 및 국세청,  UI RIA솔루션의 공급을 위한 재무적 투자 유치를 위한 투자 IR지원</li>
            <li>진행경과 : Pre-IPO컨설팅, 투자유치 IR 컨설팅</li>
            <li>투자유치 : 신주 20억(KDB 산업은행 15억 + 기업은행 5억) 구주 20억, 기술금융융자 20억</li>
            <li>사후결과 : 2015년 IPO 추진, 중국 시장 향후 3천억 매출 예정</li>
          </ul>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestSummary;