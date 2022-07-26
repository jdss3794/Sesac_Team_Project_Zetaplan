import React from 'react';
import IndustryConfirmItem from './IndustryConfirmItem';
import MAP_DATA from './industry_confirm2.json';
import './../../../css/Indusrty/industryConfirm.css';

const IndustryConfirmList2 = () => {
  const list = MAP_DATA;
  
  return (
    <div id='IndustryConfirmList2'>
      <h4 className='company-road-part'>기술 / 제품 인증 목록</h4>
      <div className='industry-confirm-list'>
      {
        list.map((ele) => <IndustryConfirmItem key={ele.id} data={ele} />)
      }
      </div>
    </div>
  );
};

export default IndustryConfirmList2;