import React from 'react';
import { FaCommentsDollar } from 'react-icons/fa';
import { TbPlaneDeparture } from 'react-icons/tb';
import { FaRegHandshake } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { BsGraphUp } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import '../../css/Company/companyInfo.css';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';

const CompanyInfo = ({title, sub}) => {
  return (
    <div>
      <CompanyHeader title={title} sub={sub} />
      <div id='SubInner' className='company-info-container'>
        <div className="company-title-container">
          <h2 className='company-title'>기업소개</h2>
          <div className='company-title-line'></div>
        </div>
        <p className='company-info'>
          (주)제타플랜인베스트는 <br/>
          “지구상의 모든 기업들의 시작과 성장과 안정을 위한 컨설팅 솔루션 제공”이라는 대명제를 가지고<br/>
          경영컨설팅 서비스를 제공하고 있습니다.
        </p>
        <div className="info-icon-container">
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <FaCommentsDollar className='info-icon' />
            </div>
            기업IR/벤처투자/PR/IPO
          </div>
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <TbPlaneDeparture className='info-icon' />
            </div>
            해외진출 지원조사, 수출
          </div>
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <FaRegHandshake className='info-icon' />
            </div>
            기술거래 기술사업화
          </div>
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <FaBalanceScale className='info-icon' />
            </div>
            M&amp;A 자문
          </div>
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <BsGraphUp className='info-icon' />
            </div>
            경영컨설팅
          </div>
          <div className="info-icon-item">
            <div className='info-icon-box'>
              <TbCertificate className='info-icon' />
            </div>
            기업인증 컨설팅
          </div>
        </div>
        <p className='company-info2'>
          1990년대와 2000년대를 동시에 존재하며 겪는<br/>
          IT기술, 바이오기술, 에너지기술과 최첨단 금융기법의 다양성이 동시대를 헤쳐나가는 기업들에게<br/>
          한편으로는 거대한 성장의 기회로 한편으로는 끝없는 추락의 기회를 동시에 제공하고 있습니다.
        </p>

        <div className='company-info-bg info-bg1'></div>
        <div className="company-info-desc-box">
          <div className="company-info-desc">
            <p className='company-info-desc-title'>
              ZetaPlan Solution
            </p>
            <span className='company-info-desc-line'>
              <span></span>
              <span></span>
            </span>
            <p className="company-info-desc-content">
              (주)제타플랜인베스트는 경제변화와 기업의 환경변화가 각 사업 분야별로 끼치는 영향에 대한 체계적인 분석과 함께 정확한 대안을 가진 솔루션을 제공하고 있습니다.  
              (주)제타플랜인베스트 소속의 컨설팅 인력은IT/바이오/기계/화학/에너지/자원/유통/교육/마케팅 분야의 전문가들로 구성되어 기업의 시작과 성장 그리고 안정을 같이 공유하고 있습니다.
              또한 성장 공유를 위한 자금 지원 네트워크가 한국내의 30여개 벤처캐피털과 미국/유럽/아시아/중동 지역의 50여개 PEF 및 벤처캐피털 등과 제휴하고 있습니다.
            </p>
          </div>
        </div>
        <div className='company-info-bg info-bg2'></div>
        <div className="company-info-desc-box">
          <div className="company-info-desc">
            <p className='company-info-desc-title'>
              ZetaPlan Service
            </p>
            <span className='company-info-desc-line'>
              <span></span>
              <span></span>
            </span>
            <p className="company-info-desc-content">
              (주)제타플랜인베스트는 투자유치/IPO/우회상장 등의 성장단 기업을 위한 서비스와 M&amp;A/PEF 자산운용 등 안정단계의 기업을 위한 서비스를 제공하고 있으며,  기업자금지원지원/기업구구조조정/기업전략컨설팅 등을 통해 한계 기업의 재성장을 위한 서비스를 동시에 지원하고 있습니다.
            </p>
          </div>
        </div>
        <div className="company-info-bg info-bg3"></div>
        <div className="company-info-desc-box">
          <div className="company-info-desc">
            <p className='company-info-desc-title'>
              ZetaPlan Consulting
            </p>
            <span className='company-info-desc-line'>
              <span></span>
              <span></span>
            </span>
            <p className="company-info-desc-content">
              (주)제타플랜인베스트의  컨설팅 서비스 영역의 중요한 부분은 초기기업을 위한 기업인증/세무회계/인사노무/지적재산권/품질인증/정책자금 등의 서비스를 제공하고 있으며, 이들 기업이 성장하여 투자유치와 IPO, M&amp;A 단계에 이를 수 있도록 지원하고 있습니다.
            </p>
          </div>
        </div>
        <div className="company-info-bg info-bg4"></div>
        <div className="company-info-desc-box">
          <div className="company-info-desc">
            <p className='company-info-desc-title'>
              ZetaPlan Promise
            </p>
            <span className='company-info-desc-line'>
              <span></span>
              <span></span>
            </span>
            <p className="company-info-desc-content">
              (주)제타플랜인베스트는 체계적인 컨설팅 서비스를 통해 기업의 시작과 성장, 안정을 원하는 모든 기업에게 위험을 제거한 최대의 기회만을 제공할 것을 약속드립니다.
            </p>
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyInfo;