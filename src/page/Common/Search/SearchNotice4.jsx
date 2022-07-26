import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoticeHeader from './../../../component/Detail/NoticeHeader';
import DetailFooter from './../../../component/Detail/DetailFooter';
import BoardSearchList from './../../../component/Search/BoardSearchList';
import BoardSearch4 from './../../../component/Search/BoardSearch4';

const SearchNotice4 = () => {
  const [data, setData] = useState([]);
  const { word } = useParams();

  useEffect(() => {
    fetch('/data/consulting.json')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  const searchWord = data.filter((p) => {
    return p.title.includes(word)
  })

  return (
    <div id='BoardSearch'>
      <NoticeHeader title="Notice" sub="공지사항"/>
      <div id='SubInner'>
        <div className='inner-search-title-wrap'>
        <h2 className="detail-title">컨설팅 실적</h2>
        </div>
        <div className='board-search-header'>
          <h2>'<em>{word}</em>' 검색결과입니다.</h2>
          <div className='inner-search-box'>
            <BoardSearch4 />
          </div>
        </div>
        <div className='board-lists title'>
          <span className='id-name'>번호</span>
          <span className='list-title'>제목</span>
          <span className='list-author'>작성자</span>
          <span className='list-date'>날짜</span>
          <span className='list-view'>조회수</span>
        </div>
        <ul className='inner-search-result'>
        {
          searchWord.map((ele) => <BoardSearchList ket={ele.id} data={ele} />)
        }
        </ul>
      </div>
      <DetailFooter />
    </div>
  );
};

export default SearchNotice4;