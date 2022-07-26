import React from 'react';
import './../../css/Common/search.css';

const SearchDropDown = ({ options, handleComboBox, selected }) => {
  return (
    <ul className='auto-search-lists'>
        {
        options.map((option, idx) => <li key={idx} 
        onClick={() => handleComboBox(option)} className={selected === idx ? 'auto-search-list selected' : 'auto-search-list'}>
          {option.title}
        </li>
        )}
    </ul>
  );
};

export default SearchDropDown;