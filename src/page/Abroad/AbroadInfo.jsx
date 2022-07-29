import React from 'react';
import AbroadNetworkTable from '../../component/Abroad/AbroadInfo/AbroadNetworkTable';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Abroad/abroadInfo.css';

const AbroadInfo = ({title, sub}) => {
  const networkTitle = [ 
    {id: 0, title:'CHINA NETWORK'}, 
    {id: 1, title:'ASIA NETWORK'}, 
    {id: 2, title:'EU&USA NETWORK'}
  ];

  return (
    <div>
      <AbroadHeader title={title} sub={sub} />

      <div id='SubInner'>
        <h2 className='detail-title'>
          해외 진출 사업
        </h2>
        <section className='abroad-info'>
          <h4 className='abroad-title'>
            해외진출 사업 분야
          </h4>
          <div className='abroad-content-box'>
            <h6 className='abroad-sub-title'>
              해외사업진출 단계별 Key Module에 대한 최적해법 제공
            </h6>
            <div className='abroad-content-img'>
              <div className="abroad-content-img">
                <img src="/img/Abroad/AbroadNetwork/abroad.png" alt="해외진출 사업" className='abroad-info-img' />
              </div>
            </div>
          </div>
          <div className='abroad-content-box'>
            <h6 className='abroad-sub-title'>
              기술거래 · 기술이전컨설팅
            </h6>
            <p className='abroad-desc'>
              · 해외기술 이전사업 진출 이후 베이징 기술교역촉진 중심, Transpacific IP, IPA VIETNAM, 주한영국상공회의소(BCCK), 이스라엘 ABG 등과 기술이전 네트워크 구축
            </p>
            <p className='abroad-desc'>
              · 국내에는 한국발명진흥회, 농업기술실용화재단, 중소기업청 해외민간네트워크 등을 통해 한국과 해외간의 공식적인 기술이전사업을 진행
            </p>
          </div>
          <div className='abroad-content-box'>
            <h6 className='abroad-sub-title'>
              글로벌 투자유치
            </h6>
            <p className='abroad-desc'>
              · 글로벌 시장 진출 및 해외투자유치를 희망하는 기업들에게 기술평가 및 IR 컨설팅 지원 등 투자유치 전문서비스 지원
            </p>
            <p className='abroad-desc'>
              · 기업의 업종 및 성장단계에 맞는 투자자 정보 제공, 투자유치 설명회 개최 및 관심 투자자 매칭 지원 등 투자유치 정보제공
            </p>
          </div>
          <div className='abroad-content-box'>
            <h6 className='abroad-sub-title'>전문분야 강점</h6>
            <div className="abroad-content-img">
              <img src="/img/Abroad/AbroadNetwork/해외진출사업 전문분야강점.png" alt="해외진출사업 전문분야 강점" />
            </div>
          </div>
        </section>
        <section className='abroad-network'>
          <h4 className='abroad-title'>
            제타플랜 해외네트워크
          </h4>
          {
            networkTitle.map(ele => {
              return (
                <div key={ele.id} className="abroad-network-section">
                  <h6 className='abroad-sub-title'>{ele.title}</h6>
                  <AbroadNetworkTable num={ele.id}/>
                </div>
              )
            })
          }
        </section>
      </div>
      
      <DetailFooter />
    </div>
  );
};

export default AbroadInfo;