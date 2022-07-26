import React from "react";
import "./../../../css/MnAIpo/mnaprocess.css";

const MnaProcess2 = () => {
  return (
    <div id="mnaprocess" className="mnaprocess2">
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part">제타플랜 M&A System</span>
        <div>
          제타플랜은 전국 300여개 투자기관 및 M&A중개기관들과의 연락을 공고히 하고 있으며, 비밀유지에 해가 되지 않는
          범위내에서 각종 기업인수 매각 정보, 기타 기업간 거래정보를교류하고 있습니다. <br /> 이러한 투자 및 M&A
          중개기관 들과의 정보 교류는 일정한 수준 귀 사의 재무거래 성사에 도움이 될 것입니다.
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 1. M&A 전략의 수립 </span>
        <div>
          <ul>
            <li>M&A수행 전 가장 중요한 부분이며 이 부분에 집중</li>
            <li>기간은 대략 1개월 15일정도 소요(일반적으로 이 부분에 2~3일 검토하고 있음) </li>
          </ul>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 2. M&A 대상 목표기업의 선정 </span>
        <div>
          <span>선정 방법 : 기회주의적 방법, 연구조사 방법, 기회주의적이며 연구조사하는 방법</span>
          <table className="mnaipo-maprocess-part-select-table" id="mnaipo-maprocess-part-select-table-block">
            <colgroup>
              <col style={{width: "40%"}} />
              <col style={{width: "60%"}} />
            </colgroup>
            <thead>
              <tr>
                <th>일반적인 기준</th>
                <th>실무적 관점에서의 판단 기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>1) 서비스 산업과 제조업 중 선호 업종</li>
                    <li>2) 매수기업과의 결합 가능 정도</li>
                    <li>3) 매수호가 범위</li>
                    <li>4) 경쟁적 위치(시장 주도 혹은 부실기업)</li>
                    <li>5) 산업구조(경쟁사 숫자 및 크기)</li>
                    <li>6) 과거 수익성</li>
                    <li>7) 과거와 예측된 미래의 성장 추세</li>
                    <li>8) 자본투자의 강도(intensity) : 현금사용율</li>
                    <li>9) 기술,시장,법률 및 정치적 위험 부담</li>
                    <li>10) 자본 시장 전체대비 투자 위험도</li>
                    <li>11) 피매수 기업의 재무상태 예측</li>
                    <li>12) 금융 및 영업의 Leverage Effect</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>1) 기업의 생산성이 낮고 보수성향에 의해 자산활용이 안되는 기업</li>
                    <li>
                      2) 부동산등의 가치평가가 낮게 되어있고 현금보유 등 자금조달능력이 뛰어나며 부채비율이 상대적으로
                      낮은 기업
                    </li>
                    <li>3) 강력한 조직을 갖추고 판매망과 브랜드 이미지가 뛰어난 기업</li>
                    <li>4) 제1대 주주의 소유비율이 낮고 기업의 인지도가 높은 기업(적대적 M&A)인 경우 필수</li>
                    <li>5) 경영환경 변화에 대응하여 꾸준히 성장할수있는 잠재력이 높은 기업</li>
                    <li>
                      6) 노사관계에 불화가 높고 친인척이 임원으로 회사전반에 대하여 전체회사 직원의 사기를 저하시키고
                      있는 기업
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="mnaipo-maprocess-part-select-table-none">
            <dl>
              <dt>일반적인 기준</dt>
              <dd>1) 서비스 산업과 제조업 중 선호 업종</dd>
              <dd>2) 매수기업과의 결합 가능 정도</dd>
              <dd>3) 매수호가 범위</dd>
              <dd>4) 경쟁적 위치(시장 주도 혹은 부실기업)</dd>
              <dd>5) 산업구조(경쟁사 숫자 및 크기)</dd>
              <dd>6) 과거 수익성</dd>
              <dd>7) 과거와 예측된 미래의 성장 추세</dd>
              <dd>8) 자본투자의 강도(intensity) : 현금사용율</dd>
              <dd>9) 기술,시장,법률 및 정치적 위험 부담</dd>
              <dd>10) 자본 시장 전체대비 투자 위험도</dd>
              <dd>11) 피매수 기업의 재무상태 예측</dd>
              <dd>12) 금융 및 영업의 Leverage Effect</dd>
            </dl>
            <dl>
              <dt>실무적 관점에서의 판단 기준</dt>
              <dd>1) 기업의 생산성이 낮고 보수성향에 의해 자산활용이 안되는 기업</dd>
              <dd>
                2) 부동산등의 가치평가가 낮게 되어있고 현금보유 등 자금조달능력이 뛰어나며 부채비율이 상대적으로 낮은
                기업
              </dd>
              <dd>3) 강력한 조직을 갖추고 판매망과 브랜드 이미지가 뛰어난 기업</dd>
              <dd>4) 제1대 주주의 소유비율이 낮고 기업의 인지도가 높은 기업(적대적 M&A)인 경우 필수</dd>
              <dd>5) 경영환경 변화에 대응하여 꾸준히 성장할수있는 잠재력이 높은 기업</dd>
              <dd>
                6) 노사관계에 불화가 높고 친인척이 임원으로 회사전반에 대하여 전체회사 직원의 사기를 저하시키고 있는
                기업
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 3. M&A Team의 결성 </span>
        <div>
          <span>제타플랜의 제휴 네트워크의 IB, 로펌, 회계법인 등과 공동으로 M&A 팀을 구성</span>
          <dl>
            <dt>1) 투자은행(Merchant Bank or Investment Bank)</dt>
            <dd>– M&A 대상기업의 소개 등 중개업무</dd>
            <dd>– M&A 대상기업의 Valuation</dd>
            <dd>– M&A 대상기업의 인수자금 조달</dd>
            <dt>2) Law Firm (Lawyer)</dt>
            <dt>3) Accounting Firm (CPA)</dt>
          </dl>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 4. M&A 대상기업의 가치 평가</span>
        <div>
          <dl>
            <dt>1) 현금흐름 방식(Disconted Cash Flow Approach)</dt>
            <dt>2) 순자산가치 방식(Net Asset Value Allroach)</dt>
            <dt>3) 수익율 방식(Profit Analysis Approach)</dt>
            <dt>4) 상대가치 평가 방식</dt>
            <dd>- 유사기업 비교법</dd>
            <dd>– 최근 인수가액 비교법</dd>
            <dd>
              * 기업가치분석결과 매수/매도상호간 갭이 15%이상 이면 조정하기 힘들어 지므로 이 경우에는 협상전략으로
              조정할 수 도 있다
            </dd>
          </dl>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 5. 의향서(Letter of Intent) </span>
        <div>
          정식 인수계약이 체결되기 이전에 인수의 기본 조건에 대한 합의서 교환으로, 의향서는 특정행위를 취하겠다는
          의사표명으로서 M&A거래에서는 거래쌍방의 합병 또는 매수합의서를 지칭하며 이는 계약이 아니므로 법적인 책임을
          물을 수 없으나 도덕적으로는 구속력을 갖는 서류
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 6. M&A 계약의 체결 </span>
        <div>
          <span>M&A 계약은 인수조건의 최종적인 합의를 문서화하는 절차로 인수계약, 매수계약, 합병계약 등을 작성함</span>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 7. Due Diligence Review(실사) </span>
        <div>
          <ul>
            <li>인수전 조사(Purchase investigation)</li>
            <li>인수후 감사(Purchase audit)</li>
            <li>회사연혁,산업정보,경영진 조직 및 노사관계, 재무/회계자료, 판매현황, 생산활동, 경영 통제</li>
          </ul>
        </div>
      </section>
      <section className="mnaipo-maprocess-section">
        <span className="mnaipo-maprocess-part"> 8. Closing(종결) </span>
        <div>
          <span>
            M&A 의 최종 절차는 closing 즉 인수대금의 지급과 상환하여 매수 대상인 자산 또는 주식을 매수자에게 이전하는
            절차
          </span>
          <dl>
            <dt>1) Acquisition (Corporate) Closing : 인수계약에 따라 매도, 매수자간에 주식 또는 자산의 양도 및 인도</dt>
            <dt>2) Financial Closing : 융자약정에 따라 대금 지급을 위한 자금 제공</dt>
            <dd>– 거래 완결을 위한 필요조건이 충족되지 않은 상태에서 종결</dd>
            <dd>– 계약당사자에 의해 선정된 특정의 Escrow Agent에 의해 수행</dd>
            <dd>– Escrow Agreement를 명확히 설정할 필요</dd>
            <dd>– 이행되지 않은 조건이 치명적으로 중요할 경우 종결하지 않는 것이 바람직함</dd>
            <dt>3) Pre-closing</dt>
            <dd>– 취급내용 : 계약 당사자간의 필요서류 교환, 요구조건 및 면제조항의 충족,협상</dd>
            <dd>– 거래 규모 또는 거래의 복잡성 여부에 따라 pre-closing 과정에서 다루어질 내용과 소요기간이 결정됨</dd>
            <dd>
              – 주요항목 : 정부인허가사항,토지관련 규제 및 저당권,노사협약,계약서상의 진술과 보장사항의 점검 및 이행
            </dd>
            <dd>– 가장 중요한 점은 상당 부분의 협상 및 재협상이 이루어진다는 점</dd>
            <dt>4) Closing</dt>
            <dd>
              – 취급 내용 : 최종 서류의 확인 및 확정,이사회의 승인,인허가 완료,주식의 양도,합병 승인, 거래대금의 지급
            </dd>
            <dd>
              – closing 날짜는 추가적으로 발생될 변경사항을 수정할 시간을 갖기 위하여 통상적으로 공유일 전일로 정해짐
            </dd>
            <dt>5) Post-closing</dt>
            <dd>
              – 취급되어질 내용 : 계약관련 서류의 제본 및 이해당사자에 대한 배부,계약서에 대한 공증, 저당권의 이전 및
              말소, 고용 및 보험 계약의 갱신, 추가적인 인허가 상황의 완료
            </dd>
            <dt>6 Closing Memorandum 작성</dt>
            <dd>– 거래개요</dd>
            <dd>– closing이전에 이루어진 내용</dd>
            <dd>– 계약관련 서류의 배부처 내역</dd>
          </dl>
        </div>
      </section>
    </div>
  );
};

export default MnaProcess2;
