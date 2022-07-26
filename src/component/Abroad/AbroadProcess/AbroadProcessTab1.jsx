import React from 'react';

const AbroadProcessTab1 = () => {
  return (
    <div className='abroad-tab-contents'>
      <section className='abroad-content-box'>
        <h4 className="abroad-title">
          중국지사 사무소
        </h4>
        <h6 className='abroad-sub-title'>
          현지 사무소 주소
        </h6>
        <p className='abroad-desc'>
          · 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China
        </p>
        <h6 className='abroad-sub-title'>
          연락처
        </h6>
        <ul className='abroad-desc-list'>
          <li>
            · 북경 - TEL : +86-10-8223-4950 / Email : yytak2000@naver.com
          </li>
          <li>
            · 서울 - 	TEL : 02-538-4801 / Email : yytak2000@hanmail.net
          </li>
        </ul>
        <h6 className='abroad-sub-title'>
          실적 및 활동
        </h6>
        <div className="abroad-content-img">
          <img src="/img/Abroad/AbroadProcess/중국지사 실적및활동.jpg" alt="중국지사 실적 및 활동" />
        </div>
      </section>
    </div>
  );
};

export default AbroadProcessTab1;