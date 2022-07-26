import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrap">
        <div className="logo"></div>
        <div className="footer_padding">
          <div className="footer_paddingbtm">
            Zeta Plan Investment Co., Ltd. Copyright 2006~2020
            <br />
            대표 홍현권 | 사업자등록번호 120-87-36351
            <br />
            중소기업상담회사 제2010-397호 | 기술거래기관 제2016-48호 | 사업화전문회사 제2017-96호 | 엑셀러레이터
            제2018-60호
          </div>
          <div className="footer_paddingbtm_center">
            <strong>서울본사</strong> (08589) 서울 금천구 디지털로 130, 1210 | Tel 02-538-4801 | Fax 02-6008-4779 |
            E-mail zetabiz@zetaplan.com <br />
            <strong>호남본부</strong> (61947) 광주광역시 서구 상무중앙로 114, 1307호 | Tel 062-233-4142
          </div>
          <div className="footer_paddingbtm_btm">
            <strong>China Office</strong> 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China
            <br />
            <strong>Vietnam Office </strong> No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay District,
            Hanoi, VietNam <br />
            <strong>Ini Office</strong> 2 Jl Jenderal Gatot Subroto Kav.58, Kuningan Timur setiabudi Jakarta Selatan,
            Indonesia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
