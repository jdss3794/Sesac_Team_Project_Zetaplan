import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import { useState, useEffect } from 'react';
import IndustryValue1 from '../../component/Industry/IndustryValue/IndustryValue1';
import IndustryValue5 from '../../component/Industry/IndustryValue/IndustryValue5';
import IndustryValue4 from '../../component/Industry/IndustryValue/IndustryValue4';
import IndustryValue2 from '../../component/Industry/IndustryValue/IndustryValue2';
import IndustryValue3 from '../../component/Industry/IndustryValue/IndustryValue3';
import { MAP_DATA_VALUE } from '../../component/Industry/IndustryValue/MapDataValue';
import './../../css/Indusrty/industryValue.css'
import AOS from "aos";
import "aos/dist/aos.css";

const IndustryValue = ({title, sub}) => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustryValue1 />,
    second: <IndustryValue2 />,
    third: <IndustryValue3 />,
    fourth: <IndustryValue4 />,
    fifth: <IndustryValue5 />

  };

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
          <h2 className='detail-title'>가치평가</h2>
        <nav className='detail-tab-lists'>
          {MAP_DATA_VALUE.map(data => {
          return (
            <button className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className='detail-tab-content ' data-aos="fade-up">{selectComponent[content]}</div>}
      </div>

      <DetailFooter />
    </div>
  );
};

export default IndustryValue;