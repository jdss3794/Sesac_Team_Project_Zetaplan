import React from 'react';
import { Link } from 'react-router-dom';

const AbroadSupportCard = ({data}) => {
  return (
    <Link to={"/abroad/case/detail/" + data.id} className='abroad-support-card'>
      <h6 className='abroad-support-card-title'>
        {data.title}
      </h6>
      <span className='abroad-support-card-title-hover'>
        더보기
      </span>
    </Link>
  );
};

export default AbroadSupportCard;