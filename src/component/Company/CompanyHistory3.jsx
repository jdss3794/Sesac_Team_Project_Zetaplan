import React from 'react';
import { useState, useEffect } from 'react';

const CompanyHistory3 = ({ title, year, month }) => {
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

    return (
        <div id='history1'>
        <ul className='history'>
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
               <li class="history-line">
                <span class="bar"></span>
                </li>
        </ul>

    </div>
    );
};

export default CompanyHistory3;