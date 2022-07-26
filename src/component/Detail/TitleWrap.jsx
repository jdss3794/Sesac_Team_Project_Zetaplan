import React from 'react';

import "./Detail.css";

const Titlewrap = ({ data }) => {
    const listData = data;
    return (
        <div className='title-wrap'>
            <h1> {listData.title}</h1 >
            <span>국내인증지도실적 1위, 중소벤처기업부 등록 컨설팅기관</span>
        </div >
    );
};

export default Titlewrap