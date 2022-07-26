import React from 'react';

const AbroadSupport1 = () => {
  return (
    <div>
      <section className='abroad-content-box'>
        <h4 className='abroad-title'>
          GCC란?
        </h4>
        <ul className='abroad-desc-list'>
          <li>
            · “기술기반” 국내업체의 성공적인 해외시장 진출을 위해, 해외 현지 경험과 컨설팅 능력을 갖춘 글로벌기술 사업화 센터(GCC)를 통해 종합적인 글로벌 기술 사업화 컨설팅 서비스를 제공합니다.
          </li>
          <li>
            · 정의 : 기술기반 국내 기업의 해외진출 관련 종합적 기술사업화 컨설팅 서비스 제공
          </li>
          <li>
            · 제공 서비스 범위 : 순 상품판매나 거래 알선이 아닌 기술관련 또는 기술기반 국내기업의 현지 진출을 위한 시장조사,고객평가,잠재수요처 발굴, 잠재수요처 컨택 및 거래,알선,법률,계약,회계,세무 등의 종합 컨설팅 원스탑 서비스 제공
          </li>
          <li>
            · 지원대상 : 우수기술 및 기술기반 제품의 해외기술 사업화를 추진하고자 하는 국내기업, 연구소, 대학 등
          </li>
        </ul>
      </section>

      <section className='abroad-content-box'>
        <h4 className="abroad-title">지원 서비스</h4>
        <dl className='abroad-desc-list'>
          <dt>상담 지원</dt>
          <dd>· 중국 현지와 국내에서 In바운드 및 Out바운드</dd>
          <dd>· 기술사업화IR 매칭 상담지원</dd>
          <dt>기술평가 지원</dt>
          <dd>· 중국시장 진출 및 해외 투자유치를 희망하는 국내 기술기업에 기술평가 지원</dd>
          <dt>사업화 서비스 지원</dt>
          <dd>· 중국 현지 VC의 투자 유치를 위한 IR컨설팅 및 기술 사업화 서비스를 지원</dd>
          <dt>분석서비스</dt>
          <dd>· 중국 기술사업화에 필요한 시장정보수집,바이어 발굴, 매칭, 분석서비스 제공</dd>
          <dt>실행 전략지원</dt>
          <dd>· 중국 기술 사업화 전반적인 의사결정 및 진출 전략 수립에 대한 실행 전략 지원</dd>
          <dt>경영활동 수행지원</dt>
          <dd>· 해외조인트 벤처 설립, 기술거래 및 이전 컨설팅 중국 시장 독자 법인설립 준비부터 법령정책 검토 및 설립자문,대행까지 전단계에 걸쳐 전문적이고 실질적인 자문과 대행을 통해 고객사의 리스크 최소화를 위한 효율적인 경영활동 수행을 지원</dd>
          <dt>출원업무 지원</dt>
          <dd>· 현지 파트너와 연계 특허, 상표권 등 지식재산권에 대한 전문적인 지식과 노하우를 바탕으로 중국 현지에서 성공적 지적재산권 출원업무 등을 지원수립</dd>
        </dl>
        {/* 이미지 추가 */}
      </section>
      
      <section className='abroad-content-box'>
        <h4 className='abroad-title'>컨설팅 지원사업 프로세스</h4>
        <div className="abroad-content-img">
          <img src="/img/Abroad/AbroadSupport/글로벌기술사업화 프로세스.png" alt="글로벌기술사업화 프로세스" />
        </div>
      </section>
    </div>
  );
};

export default AbroadSupport1;