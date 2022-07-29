import React from 'react';
import '../../css/Abroad/abroadCase.css';
import AbroadSupportCard from '../../component/Abroad/AbroadSupport/AbroadSupportCard';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import data from '../../component/Abroad/AbroadSupport/abroadSupportData.json';

const AbroadCase = ({title, sub}) => {
  return (
    <div>
      <AbroadHeader title={title} sub={sub} />

      <div id='SubInner'>
        <h2 className="detail-title">해외 진출 지원</h2>
        <div className="support-card-container">
          {
            data.map((item)=>
            <button className='support-card-box' key={item.id}>
              <AbroadSupportCard data={item}/>
            </button>)
          }
        </div>
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadCase;