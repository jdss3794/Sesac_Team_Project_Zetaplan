import React from 'react';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import { useState } from 'react';
import { MAP_DATA_HISTORY } from '../../component/Company/MapDataHistory';
import CompanyHistory1 from '../../component/Company/CompanyHistory1';
import CompanyHistory2 from '../../component/Company/CompanyHistory2';
import CompanyHistory3 from '../../component/Company/CompanyHistory3';
import './../../css/Company/companyHistory.css';

const CompanyHistory = ({title, sub}) => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <CompanyHistory1 />,
    second: <CompanyHistory2 />,
    third: <CompanyHistory3 />,
  };

  return (
    <div>
      <CompanyHeader title={title} sub={sub}/>
      <div id='SubInner'>
      <div className="company-title-container">
          <h2 className='company-title'>연혁</h2>
          <div className='company-title-line'></div>
        </div>

        <nav className='detail-tab-lists'>
          {MAP_DATA_HISTORY.map(data => {
          return (
            <button className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className='detail-tab-content '>{selectComponent[content]}</div>}
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyHistory;