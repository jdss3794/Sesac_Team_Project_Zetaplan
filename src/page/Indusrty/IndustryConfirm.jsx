import React, {useState, useEffect} from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IndustryConfirmList1 from '../../component/Industry/IndustryConfirm/IndustryConfirmList1';
import { MAP_DATA_CONFIRM } from './../../component/Industry/IndustryConfirm/MapDataConfirm';
import IndustryConfirmList0 from './../../component/Industry/IndustryConfirm/IndustryConfirmList0';
import IndustryConfirmList2 from './../../component/Industry/IndustryConfirm/IndustryConfirmList2';
import './../../css/Company/companyInfo.css'
import AOS from "aos";
import "aos/dist/aos.css";

const IndustryConfirm = ({title, sub}) => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustryConfirmList0 />,
    second: <IndustryConfirmList1 />,
    third: <IndustryConfirmList2 />
  };

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div id='IndustryConfirm'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">기업 / 기술 인증</h2>
        <nav className='detail-tab-lists'>
          {MAP_DATA_CONFIRM.map(data => {
          return (
            <button className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
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

export default IndustryConfirm;