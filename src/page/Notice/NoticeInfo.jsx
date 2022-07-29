/* 컨설팅 실적 */

import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import '../../css/Notice/NoticeList.css';
import BoardSearch4 from '../../component/Search/BoardSearch4';
import { Link } from 'react-router-dom';

const NoticeInfo = ({ title, sub, id }) => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 20; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40

  useEffect(() => {
    fetch('/data/consulting.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeInfo'>
        <div id='SubInner'>
          <h2 className='notice-title'>컨설팅 실적</h2>
          <div className='board-search-container'>
            <form method='post' name='search' action='/notice'>
              <table className='pull-right'>
                <tr>
                  <td></td>
                  <td>
                    <BoardSearch4 />
                  </td>
                  <td></td>
                </tr>
              </table>
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
                .map((item, idx) => {
                  return (
                    <li className='board-lists' key={item.id} data={item}>
                      <Link
                        to={'/notice/info/detail/' + item.id}
                        className='link-box'
                      >
                        <span className='id-name'>{item.num}</span>
                        <span className='list-title'>{item.title}</span>
                        <span className='list-author'>{item.author}</span>
                        <span className='list-date'>{item.date}</span>
                        <span className='list-view'>{item.view}</span>
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

export default NoticeInfo;
