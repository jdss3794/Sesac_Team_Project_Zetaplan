import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useRef } from "react";




const CompanyHistory3 = ({ title, year, month }) => {
 
  const parentElement = useRef(null);
  const childElement = useRef(null);
  const distanceChildFromBottom = () => {
  let chBTM = childElement.current.getBoundingClientRect().bottom;
  let peBTM = parentElement.current.getBoundingClientRect().bottom;
  console.log("부모요소와의 거리(각 요소의  Bottom),", chBTM - peBTM);
};

const heightScroll = {
  height : "distanceChildFromBottom%",
}

useEffect(() => {
  window.addEventListener("scroll", distanceChildFromBottom);
}, []);

  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/data/companyhistory.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);
  
  const data1 = lists.filter((item)=> item.year === 2009); 
  const data2 = lists.filter((item)=> item.year === 2008); 
  const data3 = lists.filter((item)=> item.year === 2007); 
  const data4 = lists.filter((item)=> item.year === 2006); 

/*   const moveScroll(el, idxRow, animation) {
    if (prevIdxRow === idxRow) { return; } // 같은 행에 있을 경우 스크롤 이동하지 않음

    prevIdxRow = idxRow;
    var $listRow = el.find('.img_thumb[data-idx-row="' + idxRow + '"]');
    var _top = $listRow.offset().top + 150;

    if (animation) {
        $('html, body').stop().animate({ scrollTop: _top }, 300);
    } else {
        $('html, body').scrollTop(_top);
    }
} */


    return (
        <div id='history3'>
        <ul className='history'  ref={parentElement}>
              <li className='history-year'>2009</li>
              {data1.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                 <div class="history-line">
                    <span class="bar"></span>
                </div>
                 <li className='history-year'>2008</li>
              {data2.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                  <li className='history-year'>2007</li>
              {data3.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}  <li className='history-year'>2006</li>
                {data4.map(({ id, title, month}) => {
                    return (
                      <li key={id}>
                          <span className='history-month'>{month}</span>
                          <span className='history-des'>{title}</span>
                      </li>
                    );
                  })}
               <li class="history-line" ref={childElement}>
                <span class="bar" style={heightScroll}></span>
                </li>
        </ul>

    </div>
    );
};

export default CompanyHistory3;