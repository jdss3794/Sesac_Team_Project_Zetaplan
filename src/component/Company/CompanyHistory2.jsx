import React from 'react';
import { useState, useEffect } from 'react';

const CompanyHistory2 = ({ title, year, month }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/data/companyhistory.json')
      .then((response) => response.json())
      .then((response) => setLists(response));
  }, []);
  
  const data1 = lists.filter((item)=> item.year === 2019); 
  const data2 = lists.filter((item)=> item.year === 2018); 
  const data3 = lists.filter((item)=> item.year === 2017); 
  const data4 = lists.filter((item)=> item.year === 2016); 
  const data5 = lists.filter((item)=> item.year === 2015); 
  const data6 = lists.filter((item)=> item.year === 2014); 
  const data7 = lists.filter((item)=> item.year === 2013); 
  const data8 = lists.filter((item)=> item.year === 2012); 
  const data9 = lists.filter((item)=> item.year === 2011); 
  const data10 = lists.filter((item)=> item.year === 2010); 

    return (
        <div id='history2'>
        <ul className='history'>
              <li className='history-year'>2019</li>
              {data1.map(({ id, title, month}) => {
                  return (
                    <li key={id} className='history-box'>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                 <li className='history-year'>2018</li>
              {data2.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                      <li className='history-year'>2017</li>
              {data3.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                      <li className='history-year'>2016</li>
              {data4.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                      <li className='history-year'>2015</li>
              {data5.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                      <li className='history-year'>2014</li>
              {data6.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
                      <li className='history-year'>2013</li>
              {data7.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
            <li className='history-year'>2012</li>
              {data8.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
            <li className='history-year'>2011</li>
              {data9.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
            <li className='history-year'>2010</li>
              {data10.map(({ id, title, month}) => {
                  return (
                    <li key={id}>
                        <span className='history-month'>{month}</span>
                        <span className='history-des'>{title}</span>
                    </li>
                  );
                })}
        </ul>

    </div>
    );
};

export default CompanyHistory2;