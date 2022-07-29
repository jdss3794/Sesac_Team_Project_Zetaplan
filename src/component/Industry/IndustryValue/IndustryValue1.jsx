import React from 'react';
import './../../../css/Indusrty/industrySupport.css';

const IndustryValue1 = () => {
    return (
        <div id='IndustryValue'>
         <section className='industry-value-section'>
             <h2 className='industry-value-part'>기술금융의 목적</h2>
             <p className='industry-value-part-txt'>기술금융은 기업의 재무정보 이외에 기술정보를 추가로 고려함으로써 신용도 판단 예측 의 정확성을 높이고,<br />담보력이 부족한 벤처창업기업을 대상으로 기술평가 전문기관의 기 술성∙사업성 평가를 통해 금융기관의 사업화 자금 대출 및 펀드운용사의 투자를 지원함으로써,<br />중소기업 및 벤처 &#183; 창업기업의 성장을 지원하고 개발기술의 사업화를 추진하는 데 목적이 있다.</p>
             <div className="industry-value-img"><img src="/img/Industry/IndustrySupport/IndustrySupport1.png" alt="기술금융의 단계" /></div>
             <span className='industry-support1-refer'>* TCB : Tech Credit Bureau (기술신용평가기관)</span><br />
             <span className='industry-support1-refer'>* TDB : Tech Data Base(기술금융데이터베이스)</span><br />
             <span className='industry-support1-refer'>* IP : Intellectual Property(지적(지식)재산권 : 특허, 실용신안 디자인, 상표, 저작권 등)</span><br />
        </section>
        <section className='industry-value-section'>
             <h4 className='industry-value-part'>기술금융의 지원방식</h4>
             <p className='industry-value-part-txt'>기술금융의 지원방식은 TCB 전문기관을 통한 기술력 등급의 평가 대출과 기업이 보유한 지적재산권의 가치를 평가하여 지원하는 <strong>특허권담보대출</strong>, 우수 지식재산권을 보유한 기업의 <strong>IP사업화 보증</strong>, 지적재산권의 판매 후 자금을 조달하고 독점적인 사용권한을 갖는 방식인<strong>세일앤드라이센스백(Sale & License back)을 통한 지적재산권 유동화 방식</strong>과,보유한 우수한 기술력과 지적재산권의 평가를 통한 <strong>IP우수기업 투자하는 형태</strong> 등 크게 <strong>4가지</strong> 형태로 나누어진다.</p>
         </section>       
     </div>
        
    );
};

export default IndustryValue1;