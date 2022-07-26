import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailFooter from '../../component/Detail/DetailFooter';
import Header from '../../component/Header/Header';
import SearchForm from '../../component/Search/SearchForm';
import SearchList from '../../component/Search/SearchList';
import './../../css/Common/search.css';

const Search = () => {
  const [data, setData] = useState([]);
  const { word } = useParams();

  useEffect(() => {
    fetch('/data/search_data.json')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  const searchWord = data.filter((p) => {
    return p.title.includes(word)
  })

  return (
    <div id='Search'>
      <Header />
      <header className='search-header'>
        <div className='search-header-banner'>전체검색 결과</div>
      </header>
      <div id='SubInner'>
        <div className='inner-search-title-wrap'>
        <h2 className="detail-title">'{word}' 검색결과</h2>
        </div>
        <div className='inner-search-box'>
          <SearchForm />
        </div>
        <div className='inner-search-head'>
          <span className='inner-search-sub'>분류</span>
          <span className='inner-search-num'>번호</span>
          <span className='inner-search-title'>제목</span>
          <span className='inner-search-date'>날짜</span>
        </div>
        <ul className='inner-search-result'>
        {
          searchWord.map((ele) => <SearchList key={ele.id} data={ele} />)
        }
        </ul>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Search;