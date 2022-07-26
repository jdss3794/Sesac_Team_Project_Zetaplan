import React from 'react';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Company/companyCollabo.css'


const CompanyCollabo = ({ title, sub }) => {
  return (
    <div id='CompanyCollabo'>
      <CompanyHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className="company-title-container">
          <h2 className='company-title'>협력기관</h2>
          <div className='company-title-line'></div>
        </div>
        <ul className='company_list'>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list01.png" alt="협력기관 IPA" />
            <a href="https://investvietnam.vn/" target="blank">IPA </a>
          </li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list02.png" alt="" />
            <a href="/" target="blank">베트남투자계획국</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list03.png" alt="" />
            <a href="/" target="blank"><p>GDMC<br />(Global Development & Management Consultants)</p></a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list04.png" alt="" />
            <a href="https://www.seoul.go.kr/main/index.jsp" target="blank">서울특별시</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list05.png" alt="" />
            <a href="http://www.bbef.com/" target="blank">북경북광전자집단</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list06.png" alt="" />
            <a href="http://www.761cspace.com/" target="blank">761공장 C-Space</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list07.png" alt="" /><a href="/">춘천바이오산업진흥원</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list08.png" alt="" /><a href="/">경기도</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list09.png" alt="" /><a href="/">하이서울기업연합회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list10.png" alt="" /><a href="/">서울IR네트워크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list11.png" alt="" /><a href="/">인천테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list12.png" alt="" /><a href="/">경기대진테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list13.png" alt="" /><a href="/">경기테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list14.png" alt="" /><a href="/">광주과학기술원</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list15.png" alt="" /><a href="/">IMC Korea</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list16.png" alt="" /><a href="/">국제기술교류재단</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list17.png" alt="" /><a href="/">한국경영기술지도사회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list18.png" alt="" /><a href="/">방위산업진흥회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list19.png" alt="" /><a href="/">중소벤처기업진흥공단</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list20.png" alt="" /><a href="/">한국스마트홈산업협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list21.png" alt="" /><a href="/">한국환경산업협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list22.png" alt="" /><a href="/">중소기업수출지원센터</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list23.png" alt="" /><a href="/">서울테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list24.png" alt="" /><a href="/">경북테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list25.png" alt="" /><a href="/">전북테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list26.png" alt="" /><a href="/">한국벤처캐피탈협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list27.png" alt="" /><a href="/">신용보증기금</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list28.png" alt="" /><a href="/">국가기술은행 NTB</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list29.png" alt="" /><a href="/">KAIPS</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list30.png" alt="" /><a href="/">머니투데이</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list31.png" alt="" /><a href="/">서울테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list32.png" alt="" /><a href="/">시흥산업진흥원</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list33.png" alt="" /><a href="/">ETRI</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list34.png" alt="" /><a href="/">나이스디앤비</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list35.png" alt="" /><a href="/">나이스평가정보</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list36.png" alt="" /><a href="/">MK비즈&</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list37.png" alt="" /><a href="/">전남테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list38.png" alt="" /><a href="/">KERI</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list39.png" alt="" /><a href="/">전북지역대학연합기술지주회사</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list40.png" alt="" /><a href="/">농업정책보험금융업</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list41.png" alt="" /><a href="/">성남산업진흥원</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list42.png" alt="" /><a href="/">부산테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list43.png" alt="" /><a href="/">농업기술실용화재단</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list44.png" alt="" /><a href="/">KDB기술거래마트</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list45.png" alt="" /><a href="/">경기중소기업종합지원센터</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list46.png" alt="" /><a href="/">한국저작권위원회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list47.png" alt="" /><a href="/">이노비즈협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list48.png" alt="" /><a href="/">경기테크노파크</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list49.png" alt="" /><a href="/">KEITI</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list50.png" alt="" /><a href="/">AT센터</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list51.png" alt="" /><a href="/">서울산업진흥원</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list52.png" alt="" /><a href="/">M&A거래정보망</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list53.png" alt="" /><a href="/">KOITA</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list54.png" alt="" /><a href="/">중소벤처기업부</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list55.png" alt="" /><a href="/">한국발명진흥회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list56.png" alt="" /><a href="/">나라장터</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list57.png" alt="" /><a href="/">한국경영자총협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list58.png" alt="" /><a href="/">KIAT</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list59.png" alt="" /><a href="/">벤처기업협회</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list60.png" alt="" /><a href="/">녹색기술센터</a></li>
          <li><img src="/img/mainFullpage/mainFullpageFooter/FooterCompanyList/list61.png" alt="" /><a href="/">한국무역협회</a></li>
        </ul>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyCollabo;