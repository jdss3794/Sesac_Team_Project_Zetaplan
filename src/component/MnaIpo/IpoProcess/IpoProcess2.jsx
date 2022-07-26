import React from "react";
import "./../../../css/MnAIpo/ipoprocess.css";

const IpoProcess2 = () => {
  return (
    <div className="IpoProcess2">
      <section className="mnaipo-ipoprocess-section">
        <span className="mnaipo-ipoprocess-part">IPO 컨설팅</span>
        <div className="mnaipo-ipoprocess-ipoconsult-parts">
          <div className="mnaipo-ipoprocess-ipoconsult-part">재무자문</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">외부감사 자문</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">기업가치 평가</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">기업가치 증대</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">IPO 전략 수립</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">IPO 계획 수립</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">IPO 주관사 선정</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">IPO 단계 자문</div>
          <div className="mnaipo-ipoprocess-ipoconsult-part">주식공모 IR 자문</div>
        </div>
      </section>
      <section className="mnaipo-ipoprocess-section" id="mnaipo-ipoprocess-section-table">
        <span className="mnaipo-ipoprocess-part">상장요건 자문</span>
        <div className="mnaipo-ipoprocess-advice-part">
          <table>
            <colgroup>
              <col style={{width: "24%"}} />
              <col style={{width: "24%"}} />
              <col style={{width: "26%"}} />
              <col style={{width: "26%"}} />
            </colgroup>
            <thead>
              <tr>
                <th>질적요건 심사표</th>
                <th>영업위혐 평가서</th>
                <th>경영지원시스템 평가표</th>
                <th>대표주관업무 모범기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>시작성</li>
                    <li>수익성</li>
                    <li>재무상태</li>
                    <li>기술성</li>
                    <li>경영성</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>영업환경관련</li>
                    <li>재무관련</li>
                    <li>관계회사관련</li>
                    <li>유통주식관련</li>
                    <li>기타사항</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>최대주주 등에 관한 사항</li>
                    <li>이해관계자에 관한 사항</li>
                    <li>관계회사에 관한 사항</li>
                    <li>이사회, 감사, 외부감사인 등에 관한 사항 </li>
                    <li>회계처리에 관한 사항</li>
                    <li>자금관리시스템에 관한 사항</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>회사의 개요</li>
                    <li>자본</li>
                    <li>주요제품의 시장성</li>
                    <li>생산 (매입)</li>
                    <li>영업활동 (매출)</li>
                    <li>재무적 안정성</li>
                    <li>관계회사</li>
                    <li>자산관리</li>
                    <li>지배구조, 이해관계자간 거래</li>
                    <li>인사 및 노무</li>
                    <li>기타사항</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mnaipo-ipoprocess-section" id="mnaipo-ipoprocess-section-dl">
        <span className="mnaipo-ipoprocess-part">상장요건 자문</span>
        <dl>
          <dt>1. 질적요건 심사표</dt>
          <dd>시작성</dd>
          <dd>수익성</dd>
          <dd>재무상태</dd>
          <dd>기술성</dd>
          <dd>경영성</dd>
        </dl>
        <dl>
          <dt>2. 영업위혐 평가서</dt>
          <dd>영업환경관련</dd>
          <dd>재무관련</dd>
          <dd>관계회사관련</dd>
          <dd>유통주식관련</dd>
          <dd>기타사항</dd>
        </dl>
        <dl>
          <dt>3. 경영지원시스템 평가표</dt>
          <dd>최대주주 등에 관한 사항</dd>
          <dd>이해관계자에 관한 사항</dd>
          <dd>관계회사에 관한 사항</dd>
          <dd>이사회, 감사, 외부감사인 등에 관한 사항 </dd>
          <dd>회계처리에 관한 사항</dd>
          <dd>자금관리시스템에 관한 사항</dd>
        </dl>
        <dl>
          <dt>4. 대표주관업무 모범기준</dt>
          <dd>회사의 개요</dd>
          <dd>자본</dd>
          <dd>주요제품의 시장성</dd>
          <dd>생산 (매입)</dd>
          <dd>영업활동 (매출)</dd>
          <dd>재무적 안정성</dd>
          <dd>관계회사</dd>
          <dd>자산관리</dd>
          <dd>지배구조, 이해관계자간 거래</dd>
          <dd>인사 및 노무</dd>
          <dd>기타사항</dd>
        </dl>
      </section>
    </div>
  );
};

export default IpoProcess2;
