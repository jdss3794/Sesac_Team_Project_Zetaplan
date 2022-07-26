import React, {useEffect} from "react";
import DetailFooter from "../../component/Detail/DetailFooter";
import IndustryHeader from "../../component/Detail/IndustryHeader";
import "./../../css/Indusrty/industryTrade.css";
import IndustryTrade1 from "../../component/Industry/Trade/IndustryTrade1";
import IndustryTrade2 from "../../component/Industry/Trade/IndustryTrade2";
import IndustryTrade3 from "../../component/Industry/Trade/IndustryTrade3";
import IndustryTrade4 from "../../component/Industry/Trade/IndustryTrade4";
import {MAP_DATA_TRADE} from "../../component/Industry/Trade/MapDataTrade";
import {useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IndustryTrade = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustryTrade1 />,
    second: <IndustryTrade2 />,
    third: <IndustryTrade3 />,
    fourth: <IndustryTrade4 />,
  };

  useEffect(() => {
    AOS.init({
        duration : 1000
    });
});

  return (
    <div id="Trade">
      <IndustryHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">기술거래</h2>
        <nav className="detail-tab-lists">
          {MAP_DATA_TRADE.map(data => {
            return (
              <button
                className={content === data.name ? "detail-tab-list active" : "detail-tab-list"}
                onClick={buttonValueSetting}
                name={data.name}
                key={data.id}
              >
                {data.text}
              </button>
            );
          })}
        </nav>
        {content && <div className="detail-tab-content " data-aos="fade-up">{selectComponent[content]}</div>}
        {/*       <section className="industry-trade-section1">
            <div className="industry-trade-title-container">
              <h2 className="industry-trade-title">기술거래</h2>
              <div className="industry-trade-title-line"></div>
            </div>
        </section> */}
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryTrade;
