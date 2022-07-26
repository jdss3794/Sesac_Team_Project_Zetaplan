import React, { useState, useEffect } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import InvestHeader from '../../component/Detail/InvestHeader';
import { INVEST_BUSINESS_DATA } from '../../component/Invest/InvestBusinessData'
import InvestBusiness1 from '../../component/Invest/InvestBusiness1';
import InvestBusiness2 from './../../component/Invest/InvestBusiness2';
import InvestBusiness3 from './../../component/Invest/InvestBusiness3';
import '../../css/Invest/investBusiness.css'
import AOS from "aos";
import "aos/dist/aos.css";

const InvestBusiness = ({ title, sub }) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <InvestBusiness1 />,
    second: <InvestBusiness2 />,
    third: <InvestBusiness3 />
  };

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });
  return (
    <div id='InvestBusiness'>
      <InvestHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">경영컨설팅</h2>
        <nav className='detail-tab-lists'>
          {INVEST_BUSINESS_DATA.map(data => {
            return (
              <button className={content === data.name ? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
                {data.text}
              </button>
            );
          })}
        </nav>
        {content && <div className='detail-tab-content' data-aos="fade-up">{selectComponent[content]}</div>}
      </div>
      <DetailFooter />
    </div>
  );
};

export default InvestBusiness;