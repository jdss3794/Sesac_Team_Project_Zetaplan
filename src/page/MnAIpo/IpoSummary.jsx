import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";
import "./../../css/MnAIpo/iposummary.css";

const IpoSummary = ({title, sub}) => {
  return (
    <div id="iposummary">
      <MAHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">IPO 개요</h2>
        <section className="mnaipo-iposummary-section">
          <span className="mnaipo-iposummary-part">IPO 란</span>
          <div>
            IPO(Initial Public Offering)란 비상장기업이 정해진 절차에 따라 일반 불특정 다수의 투자자들에게 새로 주식을
            발행하거나 기존 주식을 매출하여 유가증권시장 또는 코스닥시장에 상장하는 행위를 말합니다.
          </div>
        </section>
        <section className="mnaipo-iposummary-section">
          <span className="mnaipo-iposummary-part">상장의 종류</span>
          <div>
            <dl className="mnaipo-iposummary-part-dl">
              <dt>신규상장</dt>
              <dd>
                기업이 발행한 주권을 증권시장에 처음으로 상장시키는 것을 말합니다. 신규상장은 상장예비심사청구후
                공모(모집·매출)를 하였는지 여부에 따라, 공모상장과 직(유통)상장으로 구분되며, 직상장의 경우는
                코스닥상장법인이 공모없이 시장이전 하는 경우에만 인정됩니다.
              </dd>
              <dt>재상장</dt>
              <dd>
                상장법인의 분할 또는 분할합병에 의하여 설립된 법이나, 상장법인간의 합병에 의하여 설립된 법인 또는 상장이
                폐지된 후 5년이 경과되지 않은 법인이 발행한 주권을 상장시키는 것을 말합니다.
              </dd>
              <dt>신주상장</dt>
              <dd>
                상장법인이 증자, 합병, 전환사채 또는 신주인수권부사채를 소유한 자의 권리행사 등으로 인하여 새로이 발행한
                주권을 상장시키는 것을 말합니다.
              </dd>
              <dt>변경상장</dt>
              <dd>
                주권의 기재내용이 변경(상호, 종류, 액면금액 등)되는 경우, 새로운 주권을 교체·발행하여 상장시키는 것을
                말합니다.
              </dd>
            </dl>
          </div>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IpoSummary;
