import React, { useState } from 'react';
import Category from './Category';
import "./Detail.css";
import TabData from './detail.json'
import Titlewrap from './Titlewrap';

const Navi = () => {
    const [num, setNum] = useState(0);
    const listData = TabData;
    const code = listData.filter((data, index) => index === num)
    const fncTab = (e, index) => {
        e.preventDefault();
        setNum(index)
    }
    return (

        <div className='navi'>
            {
                code.map((data, index) => <Titlewrap key={data.id} data={data} />)
            }
            <div className='detail-nav'>
                <ul className='depth1'>
                    {
                        listData.map((data, index) => <li key={data.id} onClick={(e) => { fncTab(e, index) }}> {data.title}</li >)
                    }
                </ul >
                <ul className='depth2' >
                    {
                        code.map((data, index) => <Category key={data.id
                        } data={data} />)
                    }
                </ul >
            </div >
        </div >);
};

export default Navi; 
