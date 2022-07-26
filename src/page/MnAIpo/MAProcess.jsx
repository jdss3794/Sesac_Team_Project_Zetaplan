import React, {useState, useEffect} from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaprocess.css";
import MnaProcess1 from "./../../component/MnaIpo/MnaProcess/MnaProcess1";
import MnaProcess2 from "./../../component/MnaIpo/MnaProcess/MnaProcess2";
import {MNA_PROCESS_DATA} from "./../../component/MnaIpo/MnaProcess/MnaData";
import AOS from "aos";
import "aos/dist/aos.css";

const MAProcess = ({title, sub}) => {
  const [content, setContent] = useState("first");

  const buttonValueSetting = e => {
    const {name} = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <MnaProcess1 />,
    second: <MnaProcess2 />,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div id="mnaprocess">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">M&A 프로세스</h2>
        <section className="mnaipo-iporesult-section">
          <div>
            <nav className="detail-tab-lists">
              {MNA_PROCESS_DATA.map(data => {
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
            {content && (
              <div className="detail-tab-content " data-aos="fade-up">
                {selectComponent[content]}
              </div>
            )}
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAProcess;
