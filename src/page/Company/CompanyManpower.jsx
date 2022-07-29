import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Company/CompanyManpower.css';
import React, { useState, useEffect } from 'react';
import CompanyManAcco from './CompanyManAcco';

const CompanyManpower = ({ title, sub }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('/data/manPower.json')
      .then((response) => response.json())
      .then((response) => setList(response));
  }, []);

  return (
    <div>
      <CompanyHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className='company-title-container'>
          <h2 className='company-title'>Manpower</h2>
          <div className='company-title-line'></div>
        </div>
        <div className='manpower-outbox'>
          <div className='manpower-profile-wrap'>
            {list.map((ele) => (
              <CompanyManAcco key={ele.id} item={ele} />
            ))}
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyManpower;
