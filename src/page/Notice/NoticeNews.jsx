/* 뉴스 */
import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import '../../css/Notice/NoticeList.css';
import BoardSearch2 from '../../component/Search/BoardSearch2';
import { Link } from 'react-router-dom';

const NoticeNews = ({ title, sub, id }) => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 10; // 한장에 보여질 리스트 수
  const [page, setPage] = useState(1); // 페이지
  const startNum = (page - 1) * LIST_PER_PAGE; // 0 10 20 30
  const endNum = startNum + LIST_PER_PAGE; // 10 20 30 40

  useEffect(() => {
    fetch('/data/newsList.json')
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeNews'>
        <div id='SubInner'>
          <h2 className='notice-title'>뉴스</h2>
          <div className='board-search-container'>
            <form method='post' name='search' action='/notice'>
              <table className='pull-right'>
                <tr>
                  <td></td>
                  <td>
                    <BoardSearch2 />
                  </td>
                  <td></td>
                </tr>
              </table>
            </form>
          </div>
          <div className='list-box'>
            {/*             <div className='board-lists title'>
              <span className='id-name'>번호</span>
              <span className='list-title'>제목</span>
              <span className='list-author'>작성자</span>
              <span className='list-date'>날짜</span>
              <span className='list-view'>조회수</span>
            </div> */}
            <ul className='news-notice-list'>
              {[...lists]
                .reverse()
                .slice(startNum, endNum)
                .reverse()
                .map((item, idx) => {
                  return (
                    <li className='news-board-lists' key={item.id} data={item}>
                      <Link
                        to={'/notice/news/detail/' + item.id}
                        className='news-board-lists-link'
                      >
                        {/* <span className='news-id-name'>{item.num}</span> */}
                        <div className='news-list-thumnail'>
                          <img src={item.thumnail} alt='' />
                        </div>
                        <div className='news-box-contents'>
                          <span className='news-list-title'>{item.title}</span>
                          <span className='news-list-content'>
                            {item.content}
                          </span>
                          <span className='news-list-date'>{item.date}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <Link to='/notice/editor/'>
              <button className='news-writeBtn'>글쓰기</button>
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

export default NoticeNews;
