import React, {useEffect} from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IndustryCredit1 from '../../component/Industry/IndustryCredit/IndustryCredit1';
import IndustryCredit2 from '../../component/Industry/IndustryCredit/IndustryCredit2';
import IndustryCredit3 from '../../component/Industry/IndustryCredit/IndustryCredit3';
import IndustryCredit4 from '../../component/Industry/IndustryCredit/IndustryCredit4';
import { useState } from 'react';
import { MAP_DATA_CREDIT } from '../../component/Industry/IndustryCredit/MapDataCredit';
import IndustryCredit5 from '../../component/Industry/IndustryCredit/IndustryCredit5';
import './../../css/Indusrty/industryCredit.css';
import AOS from "aos";
import "aos/dist/aos.css";

const IndustryCredit = ({title, sub}) => {

    const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustryCredit1 />,
    second: <IndustryCredit2 />,
    third: <IndustryCredit3 />,
    fourth: <IndustryCredit4 />,
    fifth: <IndustryCredit5 />
  };

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div id='Credit'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className='detail-title'>신용평가</h2>
        <nav className='detail-tab-lists'>
          {MAP_DATA_CREDIT.map(data => {
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

export default IndustryCredit;