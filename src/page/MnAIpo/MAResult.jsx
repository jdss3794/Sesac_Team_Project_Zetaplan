import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/mnaresult.css";

const MAResult = ({title, sub}) => {
  return (
    <div id="maresult">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">M&A 성과</h2>
        <section className="mnaipo-maresult-section">
          <span className="mnaipo-maresult-part">M&A 성과 결정 요인 및 성과</span>
          <div>
            <div className="mnaipo-maresult-part-main">
              <div className="mnaipo-maresult-part-main-left">
                <span className="mnaipo-maresult-part-header">M&A 절차</span>
                <dl>
                  <dd>M&A 팀의 구성</dd>
                  <dd>전략적 검토</dd>
                  <dd>재무적인 기업가치의 평가</dd>
                  <dd>M&A 조건에 대한 협상</dd>
                  <dd>PMI</dd>
                </dl>
              </div>
              <div className="mnaipo-maresult-part-main-center">
                <span className="mnaipo-maresult-part-header">M&A 성과 결정 요인</span>
                <dl>
                  <dt>전략적 의사결정 요인</dt>
                  <dd>최고경영자의 의사결정 스타일</dd>
                  <dd>M&A의 경험 유무</dd>
                  <dd>사전조사의 철저여부</dd>
                  <dd>인수기업과 피인수기업의 상호의존성</dd>
                  <dd>인수의사결정과정의 합리성</dd>
                </dl>
                <dl>
                  <dt>PMI 관리상의 요인</dt>
                  <dd>절차적 통합의 성공여부</dd>
                  <dd>실질적 통합의 성공여부</dd>
                  <dd>경영 및 사회문화적 통합의 성공 여부</dd>
                </dl>
              </div>
              <div className="mnaipo-maresult-part-main-right">
                <span className="mnaipo-maresult-part-header">M&A의 성과</span>
                <dl>
                  <dd>새로운 가치창출</dd>
                  <dd>전략적 성과와 재무적 성과</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default MAResult;
