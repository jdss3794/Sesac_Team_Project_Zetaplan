import React, {useEffect} from 'react';
import '../../css/Abroad/abroadProcess.css';
import AbroadHeader from '../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import { MAP_DATA_ABROAD } from '../../component/Abroad/AbroadProcess/MapDataAbroad';
import { useState } from 'react';
import AbroadProcessTab1 from '../../component/Abroad/AbroadProcess/AbroadProcessTab1';
import AbroadProcessTab2 from '../../component/Abroad/AbroadProcess/AbroadProcessTab2';
import AbroadProcessTab3 from '../../component/Abroad/AbroadProcess/AbroadProcessTab3';
import AOS from "aos";
import "aos/dist/aos.css";

const AbroadProcess = ({title, sub}) => {
  const [selectedContent, setSelectedContent] = useState('first');
  const selectTab = {
    first: <AbroadProcessTab1 />,
    second: <AbroadProcessTab2 />,
    third: <AbroadProcessTab3 />
  }
  const changeTab = e => {
    setSelectedContent(e.target.name);
  }

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div>
      <AbroadHeader title={title} sub={sub} />

      <div id="SubInner">
        <h2 className="detail-title">해외지사 사업</h2>

        <nav className='detail-tab-lists'>
          {MAP_DATA_ABROAD.map((ele)=>{
            return <button 
            className={ele.name === selectedContent ? 'detail-tab-list active' : 'detail-tab-list'} 
            key={ele.id}
            onClick={changeTab}
            name = {ele.name}
            >
              {ele.title}
            </button>
          })}
        </nav>
        {selectedContent && <div className='detail-tab-content' data-aos="fade-up">{selectTab[selectedContent]}</div>}
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadProcess;