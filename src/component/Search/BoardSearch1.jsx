import React, { useState, useEffect } from 'react';
import './searchForm.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './../../css/Common/search.css';
import SearchDropDown from './SearchDropDown';

const BoardSearch1 = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(data);
  const [selected, setSelected] = useState(-1);

  const navigate = useNavigate();

  const onSubmit = () => {
    window.location.href = "/notice/" + word;
  };

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      navigate(`/notice/${word}`);
    }
  }

  useEffect(() => {
    fetch('/data/tradeInformation.json')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  useEffect(() => { 
    if (inputValue === '') {
      setHasText(false);
      setOptions([]);
    }

    if(inputValue !== ''){
    setOptions(data.filter((el) => {
      return el.title.includes(inputValue)
      })
    )
  }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setWord(event.target.value)
    setInputValue(event.target.value); 
    setHasText(true);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption)
  };

  const handleDeleteButtonClick = (event) => {
    setInputValue("");
  };

  return (
    <div id="SearchForm" className='board-search-box'>
      <div className='board-search-box-wrap'>
        <input type='text' className='search-input' name='search' placeholder='검색'
          defaultValue={inputValue} 
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
          onKeyPress={onKeyPress} />
          <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div>
          <button type="button" onClick={onSubmit} className="search-submit-btn"><FaSearch size="1.2rem" fill='#2c3540'/></button>
          <div className='auto-search-box'>
            {
            hasText ? <SearchDropDown
            options={options}
            handleComboBok={handleDropDownClick}
            selected={selected}/> : null
            }
          </div>
      </div>
    </div>
  );
};

export default BoardSearch1;