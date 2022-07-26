import React from 'react';
import { Link } from 'react-router-dom';
import './../../../css/Indusrty/industryConfirm.css';

const IndustryConfirmItem = ({data}) => {
  return (
    <Link to={"/industry/confirm/detail/" + data.id } id='IndustryConfirmItem'>
      <div className='industry-confirm-list-img'>
        <img src={data.img} alt="" />
      </div>
      <span className='industry-confirm-list-title'>{data.name}</span>
    </Link>
  );
};

export default IndustryConfirmItem;