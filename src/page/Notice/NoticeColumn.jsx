/* 기업지원정보 */

import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import '../../css/Notice/NoticeList.css';
import BoardSearch3 from './../../component/Search/BoardSearch3';
import { Link } from 'react-router-dom';

const NoticeColumn = ({ title, sub, id }) => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 20; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40

  useEffect(() => {
    fetch('/data/policyInfo.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeColumn'>
        <div id='SubInner'>
          <h2 className='notice-title'>기업지원정보</h2>
          <div className='board-search-container'>
            <form method='post' name='search' action='/notice'>
              <div className='pull-right'>
                <BoardSearch3 />
              </div>
            </form>
          </div>
          <div className='list-box'>
            <div className='board-lists title'>
              <span className='id-name'>번호</span>
              <span className='list-title'>제목</span>
              <span className='list-author'>작성자</span>
              <span className='list-date'>날짜</span>
              <span className='list-view'>조회수</span>
            </div>
            <ul className='notice-list'>
              {[...lists]
                .reverse()
                .slice(startNum, endNum)
                .reverse()
                .map((data) => {
                  return (
                    <li className='board-lists' key={data.num}>
                      <Link to={'/notice/support/detail/' + data.id}>
                        <span className='id-name'>{data.num}</span>
                        <span className='list-title'>{data.title}</span>
                        <span className='list-author'>{data.author}</span>
                        <span className='list-date'>{data.date}</span>
                        <span className='list-view'>{data.view}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <Link to='/notice/editor/'>
              <button className='writeBtn'>글쓰기</button>
            </Link>
            <Pagination
              total={lists.length}
              page={page}
              setPage={setPage}
              LIST_PER_PAGE={LIST_PER_PAGE}
            />
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeColumn;
