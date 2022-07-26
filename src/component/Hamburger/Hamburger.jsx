import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hamburger.css'

const Hamburger = ({state}) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  const openSubMenu1 = () => {
    active1 === false ? setActive1(true) : setActive1(false);
  }
  const openSubMenu2 = () => {
    active2 === false ? setActive2(true) : setActive2(false);
  }
  const openSubMenu3 = () => {
    active3 === false ? setActive3(true) : setActive3(false);
  }
  const openSubMenu4 = () => {
    active4 === false ? setActive4(true) : setActive4(false);
  }
  const openSubMenu5 = () => {
    active5 === false ? setActive5(true) : setActive5(false);
  }
  const openSubMenu6 = () => {
    active6 === false ? setActive6(true) : setActive6(false);
  }

  return (
    <div id='Hamburger' className={state ? 'open' : 'closed'}>
      <ul className='hamburger-list'>
        <li onClick={openSubMenu1} className='hamburger-title-menu'>Company
          <ul className={active1 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/company'>기업소개</Link>
            </li>
            <li>
              <Link to='/company/ci'>CI</Link>
            </li>
            <li>
              <Link to='/company/manpower'>Manpower</Link>
            </li>
            <li>
              <Link to='/company/collabo'>협력기관</Link>
            </li>
            <li>
              <Link to='/company/history'>연혁</Link>
            </li>
            <li>
              <Link to='/company/road'>오시는 길</Link>
            </li>
          </ul>
        </li>
        <li onClick={openSubMenu2} className='hamburger-title-menu'>M&A / IPO
          <ul className={active2 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/mna'>M&A 개요</Link>
            </li>
            <li>
              <Link to='/mna/result'>M&A 성과</Link>
            </li>
            <li>
              <Link to='/mna/process'>M&A 프로세스</Link>
            </li>
            <li>
              <Link to='/ipo'>IPO 개요</Link>
            </li>
            <li>
              <Link to='/ipo/result'>IPO 성과</Link>
            </li>
            <li>
              <Link to='/ipo/process'>IPO 프로세스</Link>
            </li>
          </ul>
        </li>        
        <li onClick={openSubMenu3} className='hamburger-title-menu'>투자/경영
          <ul className={active3 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/invest'>경영컨설팅</Link>
            </li>
            <li>
              <Link to='/invest/result'>투자 개요/사례</Link>
            </li>
            <li>
              <Link to='/invest/plan'>사업계획서/IR</Link>
            </li>
            <li>
              <Link to='/invest/strategy'>전략수립</Link>
            </li>
            <li>
              <Link to='/invest/empowerment'>역량강화</Link>
            </li>
            <li>
              <Link to='/invest/process'>투자 컨설팅 과정</Link>
            </li>
          </ul>
        </li>
        <li onClick={openSubMenu4} className='hamburger-title-menu'>Abroad
          <ul className={active4 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/abroad'>해외 진출 사업</Link>
            </li>
            <li>
              <Link to='/abroad/case'>해외 진출 지원</Link>
            </li>
            <li>
              <Link to='/abroad/process'>해외 지사 사업</Link>
            </li>
          </ul>
        </li>
        <li onClick={openSubMenu5} className='hamburger-title-menu'>Industry
          <ul className={active5 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/industry'>산업 별 이슈</Link>
            </li>
            <li>
              <Link to='/industry/confirm'>기업 / 기술 인증</Link>
            </li>
            <li>
              <Link to='/industry/transfer'>기술 이전</Link>
            </li>
            <li>
              <Link to='/industry/trade'>기술 거래</Link>
            </li>
            <li>
              <Link to='/industry/value'>가치 평가</Link>
            </li>
            <li>
              <Link to='/industry/credit'>신용 평가</Link>
            </li>
            <li>
              <Link to='/industry/support'>지원 사업</Link>
            </li>
          </ul>
        </li>
        <li onClick={openSubMenu6} className='hamburger-title-menu'>Notice
          <ul className={active6 ? 'hamburger-sub-menu open' : 'hamburger-sub-menu'}>
            <li>
              <Link to='/notice'>공지사항</Link>
            </li>
            <li>
              <Link to='/notice/news'>뉴스</Link>
            </li>
            <li>
              <Link to='/notice/support'>기업지원정보</Link>
            </li>
            <li>
              <Link to='/notice/info'>컨설팅 실적</Link>
            </li>
            <li>
              <Link to='/notice/inquiry'>문의하기</Link>
            </li>
            <li>
              <Link to='/notice/request'>상담신청</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;