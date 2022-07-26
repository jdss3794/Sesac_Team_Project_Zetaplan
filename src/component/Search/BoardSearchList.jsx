import React from 'react';

const BoardSearchList = ({data}) => {
  return (
    <li className='board-lists' key={data.num}>
      <a href={data.link}>
        <span className='id-name'>{data.num}</span>
        <span className='list-title'>{data.title}</span>
        <span className='list-author'>{data.author}</span>
        <span className='list-date'>{data.date}</span>
        <span className='list-view'>{data.view}</span>
      </a>
    </li>
  );
};

export default BoardSearchList;