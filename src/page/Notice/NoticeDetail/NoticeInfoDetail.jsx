/* 컨설팅 실적 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../../../css/Notice/NoticeList.css';
import { useParams } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom'; */
import { Link } from 'react-router-dom';

const NoticeInfoDetail = ({ infoData }) => {
  let { id } = useParams();
  const showContent = (data) => {
    if (data === '이미지') {
      return (
        <img
          className='detail-sample-img'
          src='/img/common/sample_img.jpg'
          alt='샘플 이미지'
        />
      );
    } else {
      return data;
    }
  };

  return (
    <div>
      <NoticeHeader title='Notice' sub='컨설팅 실적' />
      <div id='NoticeInfoDetail'>
        <div id='SubInner'>
          <h2 className='notice-title'>컨설팅 실적</h2>
          <div className='detail-container'>
            <table>
              <thead>
                <tr>
                  <th>{infoData[id - 1].title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='detail-container-header-content'>
                    <div>
                      <span className='detail-container-header-author'>
                        작성자 : {infoData[id - 1].author}
                      </span>
                      <span className='detail-container-header-date'>
                        작성일 : {infoData[id - 1].date}
                      </span>
                    </div>
                    <div>
                      <span className='detail-container-header-view'>
                        조회수 : {infoData[id - 1].view}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <td className='detail-container-header-contents'>
                      {showContent(infoData[id - 1].content)}
                    </td>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
          <Link to={'/notice/info'} className='detail-first-list-link'>
            <button className='detail-first-list'>목록</button>
          </Link>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInfoDetail;
