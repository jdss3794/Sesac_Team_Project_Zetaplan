import React from "react";
import "../../../css/Notice/NoticeList.css";
import DetailFooter from "../../Detail/DetailFooter";
import IndustryHeader from "../../Detail/IndustryHeader";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const IndustryDetail = ({data}) => {
  let {id} = useParams();
  const showContent = data => {
    if (data === "이미지") {
      return <img className="detail-sample-img" src="/img/common/sample_img.jpg" alt="샘플 이미지" />;
    } else {
      return data;
    }
  };

  return (
    <div id="IndustryDetail">
      <IndustryHeader title="Industry" sub="거래정보" />
      <div id="SubInner">
        <h2 className="detail-title">거래정보</h2>
        <div className="detail-container">
          <table>
            <thead>
              <tr>
                <th>{data[id - 1].title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="detail-container-header-content">
                  <div>
                    <span className="detail-container-header-author">작성자 : {data[id - 1].author}</span>
                    <span className="detail-container-header-date">작성일 : {data[id - 1].date}</span>
                  </div>
                  <div>
                    <span className="detail-container-header-view">조회수 : {data[id - 1].view}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <td className="detail-container-header-contents">{showContent(data[id - 1].content)}</td>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <Link to={"/industry/trade"} className="detail-first-list-link">
          <button className="detail-first-list">목록</button>
        </Link>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryDetail;
