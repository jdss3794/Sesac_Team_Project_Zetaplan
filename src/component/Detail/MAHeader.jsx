import React from 'react';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import './subHeader.css';
import Header from '../Header/Header';
import SubChatBox from './../ChatBox/SubChatBox';

const MAHeader = ({title, sub}) => {
  return (
    <div id='SubHeader'>
      <Header />
      <div className='company-header-banner ma-header-banner'>
        <div className='company-header-title-wrap'>
          <h2 className='company-header-title'>M&A / IPO</h2>
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
              <li><a href="/mna">M&A 개요</a></li>
              <li><a href="/mna/result">M&A 성과</a></li>
              <li><a href="/mna/process">M&A 프로세스</a></li>
              <li><a href="/ipo">IPO 개요</a></li>
              <li><a href="/ipo/result">IPO 성과</a></li>
              <li><a href="/ipo/process">IPO 프로세스</a></li>
            </ul>
          </span>
        </nav>
      </div>
      <SubChatBox />
    </div>
  );
};

export default MAHeader;