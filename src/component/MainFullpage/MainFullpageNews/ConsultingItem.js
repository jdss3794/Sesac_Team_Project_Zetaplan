import React from 'react';
import './BoardItem.css';
import { Link } from 'react-router-dom';

const ConsultingItem = ({ item }) => {
  return (
    <div className='product-item'>
      <Link to={'/notice/info/detail/' + item.id}>
        <p className='item-title'>{item.title}</p>
        <p className='item-date'>{item.date}</p>
      </Link>
    </div>
  );
};

export default ConsultingItem;
