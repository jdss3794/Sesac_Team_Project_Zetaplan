import React, { useState, useEffect } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import './../../css/Indusrty/industrySupport.css';
import IndustrySupport2 from './../../component/Industry/IndustrySupport/IndustrySupport2';
import IndustrySupport4 from './../../component/Industry/IndustrySupport/IndustrySupport4';
import { MAP_DATA } from './../../component/Industry/IndustrySupport/MapData';
import './../../css/Indusrty/industrySupport.css';
import AOS from "aos";
import "aos/dist/aos.css";

const IndustrySupport = ({title, sub}) => {
  const [content, setContent] = useState('first');
  const [active, setActive] = useState('');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
    setActive(name)
  };

  const selectComponent = {
    first: <IndustrySupport2 />,
    second: <IndustrySupport4 />
  };

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div id='IndustrySupport'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
      <h2 className="detail-title">지원사업</h2>
        <nav className='detail-tab-lists'>
          {MAP_DATA.map(data => {
          return (
            <button type='button' className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className={active === content ? 'detail-tab-content active' : 'detail-tab-content'} data-aos="fade-up">{selectComponent[content]}</div>}
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustrySupport;