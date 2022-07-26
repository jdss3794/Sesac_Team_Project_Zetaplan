import React from 'react';
import { useParams } from 'react-router-dom';
import AbroadHeader from './../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import AbroadSupport1 from '../../component/Abroad/AbroadSupport/AbroadSupport1';
import AbroadSupport2 from '../../component/Abroad/AbroadSupport/AbroadSupport2';
import AbroadSupport3 from '../../component/Abroad/AbroadSupport/AbroadSupport3';
import AbroadSupport4 from '../../component/Abroad/AbroadSupport/AbroadSupport4';
import AbroadSupport5 from '../../component/Abroad/AbroadSupport/AbroadSupport5';
import AbroadSupport6 from '../../component/Abroad/AbroadSupport/AbroadSupport6';
import AbroadSupport7 from '../../component/Abroad/AbroadSupport/AbroadSupport7';
import AbroadSupport8 from '../../component/Abroad/AbroadSupport/AbroadSupport8';
import AbroadSupportHistory from '../../component/Abroad/AbroadSupport/AbroadSupportHistory';

const AbroadCaseDetail = () => {
  let {id} = useParams();
  let supportItems = [
    {title: "글로벌 기술사업화", item: <AbroadSupport1 />},
    {title: "수출바우처 사업", item: <AbroadSupport2 />},
    {title: "해외지사화 사업", item: <AbroadSupport3 />},
    {title: "해외 M&A 지원사업 (KITIA)", item: <AbroadSupport4 />},
    {title: "해외진출 전략수립", item: <AbroadSupport5 />},
    {title: "해외시장 조사", item: <AbroadSupport6 />},
    {title: "해외바이어 발굴", item: <AbroadSupport7 />},
    {title: "환경산업 해외진출 지원사업", item: <AbroadSupport8 />}
  ]

  return (
    <div>
      <AbroadHeader title="Abroad" sub="해외진출 지원" />
      
      <div id="SubInner">
        <h2 className='detail-title'>{supportItems[id].title}</h2>
        <AbroadSupportHistory id={id} />
        {
          supportItems[id].item
        }
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadCaseDetail;