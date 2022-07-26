import React from 'react';
import IndustryConfirmItem from './IndustryConfirmItem';
import MAP_DATA from './industry_confirm1.json';
import './../../../css/Indusrty/industryConfirm.css';

const IndustryConfirmList1 = () => {
  const list = MAP_DATA;
  
  return (
    <div id='IndustryConfirmList1'>
      <h4 className='company-road-part'>기업 인증 목록</h4>
      <button className='industry-confirm-list'>
      {
        list.map((ele) => <IndustryConfirmItem key={ele.id} data={ele} />)
      }
      </button>
    </div>
  );
};

export default IndustryConfirmList1;