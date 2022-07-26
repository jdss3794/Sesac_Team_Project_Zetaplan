import React, { useState, useEffect } from 'react';
import './MainFullpageNews.css';
import { BsPlusLg } from 'react-icons/bs';
import NewsItem from './NewsItem';
import InvestItem from './InvestItem';
import PolicyInfoItem from './PolicyInfoItem';
import ConsultingItem from './ConsultingItem';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainFullpageNews = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);

  useEffect(() => {
    fetch('/data/newsList.json')
      .then((response) => response.json())
      .then((response) => setList1(response));
  }, []);

  useEffect(() => {
    fetch('/data/tradeInformation.json')
      .then((response) => response.json())
      .then((response) => setList2(response));
  }, []);

  useEffect(() => {
    fetch('/data/policyInfo.json')
      .then((response) => response.json())
      .then((response) => setList3(response));
  }, []);

  useEffect(() => {
    fetch('/data/consulting.json')
      .then((response) => response.json())
      .then((response) => setList4(response));
  }, []);

  /* 인덱스 4개만 뽑기 */

  const newsListData = list1.filter((item, index) => index < 4);
  const InvestListData = list2.filter((item, index) => index < 4);
  const PolicyInfoListData = list3.filter((item, index) => index < 4);
  const ConsultingListData = list4.filter((item, index) => index < 4);

  const newsList = newsListData.map((item) => {
    return <NewsItem key={item.id} item={item} />;
  }); /* 4개 뽑은걸 돌려서 title이랑 date만 뽑기 */

  const InvestList = InvestListData.map((item) => {
    return <InvestItem key={item.id} item={item} />;
  });

  const PolicyInfoList = PolicyInfoListData.map((item) => {
    return <PolicyInfoItem key={item.id} item={item} />;
  });
  const ConsultingList = ConsultingListData.map((item) => {
    return <ConsultingItem key={item.id} item={item} />;
  });

  return (
    <div id='FullpageNews'>
      <div id='MainInner'>
        <div className='content-box'>
          <h2 className='section-title'>
            새소식<span>Notice</span>
          </h2>

          <div className='board-box' data-aos='fade-up'>
            <div className='board'>
              <h3 className='news-title'>
                <p>공지사항</p>
              </h3>
              <div className='board-list'>{InvestList}</div>
              <Link to={'/notice'} className='more-btn'>
                <BsPlusLg className='more-icon' />
                <div className='more-text'>더보기</div>
              </Link>
            </div>

            <div className='board'>
              <h3 className='news-title'>
                <p>뉴스</p>
              </h3>
              <div className='board-list'>{newsList}</div>
              <Link to={'/notice/news'} className='more-btn'>
                <BsPlusLg className='more-icon' />
                <div className='more-text'>더보기</div>
              </Link>
            </div>

            <div className='board'>
              <h3 className='news-title'>
                <p>기업지원정보</p>
              </h3>
              <div className='board-list'>{PolicyInfoList}</div>
              <Link to={'/notice/support'} className='more-btn'>
                <BsPlusLg className='more-icon' />
                <div className='more-text'>더보기</div>
              </Link>
            </div>

            <div className='board'>
              <h3 className='news-title'>
                <p>컨설팅 실적</p>
              </h3>
              <div className='board-list'>{ConsultingList}</div>
              <Link to={'/notice/info'} className='more-btn'>
                <BsPlusLg className='more-icon' />
                <div className='more-text'>더보기</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* MainInner */}
    </div> /* FullpageNews */
  );
};

export default MainFullpageNews;
