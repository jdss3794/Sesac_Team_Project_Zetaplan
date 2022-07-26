import React, { useState, useEffect } from 'react';
import './searchForm.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './../../css/Common/search.css';
import SearchDropDown from './SearchDropDown';

const BoardSearch5 = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(data);
  const [selected, setSelected] = useState(-1);

  const navigate = useNavigate();

  const onSubmit = () => {
    window.location.href = "/notice/inquiry/" + word;
  };

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      navigate(`/notice/inquiry/${word}`);
    }
  }

  useEffect(() => {
    fetch('/data/qa.json')
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

  const handleKeyUp = (event) => {
    if(hasText){
      if(event.key === 'ArrowDown' && options.length - 1 > selected){ 
        setSelected(selected + 1);
      }

      if(event.key === 'ArrowUp' && selected >= 0){
        setSelected(selected - 1);
      }
      if(event.key === 'Enter' && selected >= 0){
        handleDropDownClick(options[selected])
        setSelected(-1);
      }
    }
  }

  return (
    <div id="SearchForm" className='board-search-box'>
      <div className='board-search-box-wrap'>
        <input type='text' className='search-input' name='search' placeholder='검색어를 입력하세요.'
          value={inputValue} 
          defaultValue={inputValue} 
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
          onKeyPress={onKeyPress} />
          <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div>
          <button type="button" onClick={() => {onSubmit()}} className="search-submit-btn"><FaSearch size="1.2rem" fill='#2c3540'/></button>
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

export default BoardSearch5;