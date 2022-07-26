import React from 'react';
import { useState, useEffect } from 'react';

const CompanyHistory1 = ({ title, year, month }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/data/companyhistory.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);
  
  const data1 = lists.filter((item)=> item.year === 2021); 
  const data2 = lists.filter((item)=> item.year === 2020); 

    return (
        <div id='history1'>
        <ul className='history'>
              <li className='history-year'>2021</li>
              {data1.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}{/* {if month === month? month : ''} */}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                 <div class="history-line">
                    <span class="bar"></span>
                </div>
                 <li className='history-year'>2020</li>
              {data2.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
               <li class="history-line">
                <span class="bar"></span>
                </li>
        </ul>

    </div>
    );
};

export default CompanyHistory1;