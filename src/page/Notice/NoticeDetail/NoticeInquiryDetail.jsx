/* 문의하기 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
import '../../../css/Notice/NoticeList.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NoticeInquiryDetail = ({ inquiryData }) => {
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
      <NoticeHeader title='Notice' sub='문의하기' />
      <div id='NoticeInquiryDetail'>
        <div id='SubInner'>
          <h2 className='notice-title'>문의하기</h2>
          <div className='detail-container'>
            <table>
              <thead>
                <tr>
                  <th>{inquiryData[id - 1].title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='detail-container-header-content'>
                    <div>
                      <span className='detail-container-header-author'>
                        작성자 : {inquiryData[id - 1].author}
                      </span>
                      <span className='detail-container-header-date'>
                        작성일 : {inquiryData[id - 1].date}
                      </span>
                    </div>
                    <div>
                      <span className='detail-container-header-view'>
                        조회수 : {inquiryData[id - 1].view}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <td className='detail-container-header-contents'>
                      {showContent(inquiryData[id - 1].content)}
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='inquiry-Btnbox'>
            <Link to='/notice/editor/' className='detail-rewriteBtn'>
              <button className='rewriteBtn'>답글쓰기</button>
            </Link>
            <Link to={'/notice/inquiry'} className='detail-first-list-link'>
              <button className='detail-first-list'>목록</button>
            </Link>
          </div>
        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInquiryDetail;
