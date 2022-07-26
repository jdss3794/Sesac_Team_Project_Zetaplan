import React from 'react';
import Header from '../Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './mainFullpage.css';
import ChatBox from '../ChatBox/ChatBox';
import MainSlide1 from './../MainSlide/MainSlide1';
import MainSlide2 from './../MainSlide/MainSlide2';
import MainSlide3 from './../MainSlide/MainSlide3';
import MainSlide4 from './../MainSlide/MainSlide4';
import SubChatBox from './../ChatBox/SubChatBox';

const MainFullpage = () => {
  return (
    <div id='FullpageMain'>
      <Header />
      <div className='swiper-wrap'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // 슬라이더 사이 마진
        slidesPerView={1} // 한 번에 보여지는 슬라이더
        loop={true} // 반복
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')} // 슬라이더를 넘길때 마다 호출
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper">
          <SwiperSlide className='swiper-slide'><MainSlide1 /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><MainSlide2 /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><MainSlide3 /></SwiperSlide>
          <SwiperSlide className='swiper-slide'><MainSlide4 /></SwiperSlide>
        </Swiper>
        <SubChatBox />
      </div>
    </div>
  );
};

export default MainFullpage;
