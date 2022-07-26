/* global kakao */
import React from 'react';
import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import { useEffect } from 'react'
import './../../css/Company/companyRoad.css';

const CompanyRoad = ({title, sub}) => {
    useEffect(()=>{
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.475698, 126.881645),
        level: 3
      };
      
      var map = new kakao.maps.Map(container, options);
      var markerPosition  = new kakao.maps.LatLng(37.475698, 126.881645); 
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    }, [])

  return (
    <div id='CompanyRoad'>
      <CompanyHeader title={title} sub={sub}/>
      <div id="SubInner">
        <div className="company-title-container">
          <h2 className="company-title">오시는 길</h2>
          <div className="company-title-line"></div>
        </div>
        <div className="company-road-wrap">
          <span className='company-road-part'>서울본사</span>
          <p className='company-road-address'>주소 : 서울특별시 금천구 디지털로 130 남성프라자 1210호</p>
          <p className='company-road-address'>Address : Namsung Plaza #1210 130, Digital-ro, Geumcheon-gu, Seoul, Korea</p>
          <p className='company-road-tel'>Tel : +82-538-4801</p>
          <p className='company-road-fax'>Fax : +82-6008-4779</p>
          <div className='company-road-map-wrap'>
            <div id="map" style={{width:"800px", height:"400px"}}></div>
          </div>
        </div>
        <div className="company-road-wrap">
          <span className='company-road-part'>호남본부</span>
          <p className='company-road-address'>주소 : 광주광역시 서구 치평로 124 케이원오피스타운 726호</p>
          <p className='company-road-address'>Address : #726, 124, Chipyeong-ro Seo-gu Gwangju, Korea</p>
          <p className='company-road-tel'>Tel : (062)373-4142</p>
        </div>
        <div className="company-road-wrap">
          <span className='company-road-part'>China Office</span>
          <p className='company-road-address'>Address : 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China</p>
          <p className='company-road-tel'>Tel : +86-10-8223-4950</p>
        </div>
        <div className="company-road-wrap">
          <span className='company-road-part'>Vietnam Office</span>
          <p className='company-road-address'>Add : No 241, Tang Thiet Giap Apartment, 110 Hoang Quoc Viet Street, Cau Giay District, Hanoi City, VietNam</p>
          <p className='company-road-tel'>Tel : +84-4-6281-7522</p>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyRoad;