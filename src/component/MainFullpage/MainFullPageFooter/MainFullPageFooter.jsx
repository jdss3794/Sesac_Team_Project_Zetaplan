import React from "react";
import "./MainFullPageFooter.css";
import Footer from "../../Footer/Footer";
import {IoIosArrowDroprightCircle} from "react-icons/io";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

const MainFullPageFooter = () => {
  return (
    <div id="FullPageFooter">
      <Footer />
      <div className="FullPageFooter_img">
        <div id="MainInner">
          <a href="/notice/request">
            <div className="contact">
              <h1>
                CONSULTING CONTACT
                <span className="IoIosArrowDroprightCircle">
                  <IoIosArrowDroprightCircle />
                </span>
              </h1>
            </div>
          </a>
          <div className="cooperative_list">
            <div className="company_list">협력기관</div>
            <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              slidesPerView={6}
              spaceBetween={40}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list01.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list02.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list03.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list04.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list05.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list06.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list07.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list08.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list09.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list10.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list11.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list12.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list13.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list14.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list15.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list16.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list17.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list18.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list19.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list20.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list21.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list22.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list23.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list24.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list25.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list26.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list27.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list28.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list29.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list30.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list31.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list32.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list33.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list34.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list35.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list36.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list37.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list38.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list39.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list40.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list41.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list42.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list43.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list44.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list45.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list46.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list47.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list48.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list49.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list50.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list51.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list52.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list53.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list54.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list55.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list56.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list57.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list58.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list59.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list60.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/mainFullpage/mainFullpageFooter/FooterCompanyList/list61.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFullPageFooter;
