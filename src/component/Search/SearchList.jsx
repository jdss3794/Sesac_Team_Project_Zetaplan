import React from 'react';
import './../../css/Common/search.css';
import { Link } from 'react-router-dom';

const SearchList = ({data}) => {
  console.log(data.link)
  return (
    <li className='search-lists'>
      <a href={data.link} className='search-list'>
        <span className='inner-search-sub'>{data.sub}</span>
        <span className='inner-search-num'>{data.num}</span>
        <span className='inner-search-title'>{data.title}</span>
        <span className='inner-search-date'>{data.date}</span>
      </a>
    </li>
  );
};

export default SearchList;