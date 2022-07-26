import React from 'react';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import './subHeader.css';
import Header from '../Header/Header';
import SubChatBox from './../ChatBox/SubChatBox';

const InvestHeader = ({title, sub}) => {
  return (
    <div id='SubHeader'>
      <Header />
      <div className='company-header-banner invest-header-banner'>
        <div className='company-header-title-wrap'>
          <h2 className='company-header-title'>Invest</h2>
          <p className='company-header-des'>Successful business partner for corporate growth</p>
        </div>
        <nav className='company-header-nav'>
          <a href='/'><AiFillHome size="30px" /></a>
          <span className='sub-nav-depth1-title'>{title}<AiOutlineDown />
            <ul className='sub-nav-depth1'>
              <li><a href="/company">Company</a></li>
              <li><a href="/mna">M&A/IPO</a></li>
              <li><a href="/invest">투자/경영</a></li>
              <li><a href="/abroad">Abroad</a></li>
              <li><a href="/industry">Industry</a></li>
              <li><a href="/notice">Notice</a></li>
            </ul>
          </span>
          <span className='sub-nav-depth2-sub'>{sub}<AiOutlineDown />
            <ul className='sub-nav-depth2'>
              <li><a href="/invest">경영컨설팅</a></li>
              <li><a href="/invest/result">투자 개요/사례</a></li>
              <li><a href="/invest/plan">사업계획서/IR</a></li>
              <li><a href="/invest/strategy">전략수립</a></li>
              <li><a href="/invest/empowerment">역량강화</a></li>
              <li><a href="/invest/process">투자 컨설팅 과정</a></li>
            </ul>
          </span>
        </nav>
      </div>
      <SubChatBox />
    </div>
  );
};

export default InvestHeader;