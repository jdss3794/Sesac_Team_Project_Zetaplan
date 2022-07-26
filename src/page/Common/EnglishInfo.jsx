/* global kakao */
import React, {useEffect} from "react";
import DetailFooter from "../../component/Detail/DetailFooter";
import Header from "../../component/Header/Header";
import "./EnglishInfo.css";

const EnglishInfo = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.475698, 126.881645),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.475698, 126.881645);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div id="EnglishInfo">
      <Header />
      <div id="SubInner">
        <section className="EnglishInfo-section1" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">About Us</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div className="EnglishInfo-section1-img"></div>
          <div className="EnglishInfo-section1-img-line"></div>
          <ul className="EnglishInfo-section1-content">
            <li>
              <span className="bold">Zeta Plan Investment Co, Ltd. </span> was established in 2006 as a investment
              consulting company specializing in Venture Investment, Technology Transfer, M&A, Management Consulting,
              and support services perform overseas. South Korea’s Bio, IT, Environment, Energy, Medical, High-tech
              Machinery, Aerospace, Agri-Food, Marine Fisheries, Media, Content, Automobiles, Semiconductors with
              early-stage investments in high technology, advanced manufacturing technology commercialization,
              technology transfer the work is carried out systematically as China, Asia, Europe and the United States.
            </li>
            <li>
              Particularly Zeta Plan Investment Co, Ltd. Korea Venture Business Association 15,000 companies, Technology
              Small Business Innovation Association 15,000 companies, Industry and Technology Development Association
              30,000 companies, owned concluded an agreement for the excellent technical support global technology
              commercialization and technology transfer services promoting.
            </li>
          </ul>
        </section>
        <section className="EnglishInfo-section2" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Focus on Technology Transfer</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div className="EnglishInfo-section2-content">
            <div>
              Zeta Plan Investment Co, Ltd. has been a focus on promoting technology transfer business between Korea and
              China. <br /> South Korea and China in the demand for technology and supply technology to perform
              technology transfer and identify the role negotiation channels between the two countries.
            </div>
          </div>
          <div>
            <div className="bold"> - Global Technology Transfer Network China and World Wide</div>
            <div className="EnglishInfo-section2-content-img-have">
              <div className="EnglishInfo-section2-content-img"></div>
              <ul className="EnglishInfo-section2-content-img-right">
                <li>Zeta Plan Investment Co, Ltd. is to form a global Technology Transfer network to 15 countries. </li>
                <li>
                  And a global technology transfer, especially Beijing, Tianjin, Shanghai, Qingdao, Zhejiang, Wenzhou
                  and Hong Kong, has established a cooperative network for technology Transfer.
                </li>
              </ul>
            </div>
            <div className="EnglishInfo-section2-content-img-worldwide"></div>
          </div>
        </section>
        <section className="EnglishInfo-section3" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Our Clients</h1>
          <div className="EnglishInfo-section-bar"></div>
          <dl>
            <dt>- Public Clients</dt>
            <dd className="EnglishInfo-section3-public-img"></dd>
            <dt>- Company Clients</dt>
            <dd className="EnglishInfo-section3-company-img"></dd>
            <dt>- University Clients</dt>
            <dd className="EnglishInfo-section3-univ-img"></dd>
          </dl>
        </section>
        <section className="EnglishInfo-section4" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Business Area</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div className="EnglishInfo-section-content" id="EnglishInfo-section-content1">
            <div className="businessarea-img1"></div>
            <ul>
              <li>
                Technology Transfer service of the future must evolve to compete and excel in the midst of trends and
                drivers that are affecting Korea commercialization programs. <br /> It is often quicker to assign tasks
                to existing staff than to locate and leverage the right external skill sets; but, this approach of tens
                spread operations too thin, wastes time/resources, <br /> and detracts from real priorities.
              </li>
              <li>
                To relieve this tension, The Zeta Plan Investment co. Ltd. is launching a first-of-its-kind expert
                consultant network dedicated to fulfilling these tasks for Technology Transfer operation.
              </li>
              <li>
                Based on specific technology needs, Zeta Plan Investment co. Ltd. will create a customized team of
                experts to support you in expertise areas described below:
              </li>
            </ul>
            <table>
              <colgroup>
                <col style={{width: "20%"}} />
                <col style={{width: "50%"}} />
                <col style={{width: "30%"}} />
              </colgroup>
              <thead>
                <tr>
                  <th>Focus</th>
                  <th>Description</th>
                  <th>Consultant Expertise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Program Development</td>
                  <td>
                    The robust experience, knowledge of options, and strategies to set your program up for success.
                  </td>
                  <td>
                    <ul>
                      <li>• Commercialization Process Engineering</li>
                      <li>• Technology Review/Audit</li>
                      <li>• Office Systems</li>
                      <li>• Gap Funding</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>
                    Leverage leading marketing tactics to engage partners and the public in your program and promising
                    innovations.
                  </td>
                  <td>
                    <ul>
                      <li>• Strategic Marketing</li>
                      <li>• Technology Marketing Material</li>
                      <li>• Social Media</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Relationship - building</td>
                  <td>
                    Develop programs to encourage relationship building or rapidly expand your reach and access through
                    our experts’ existing networks.
                  </td>
                  <td>
                    <ul>
                      <li>• Internal Stakeholder Development</li>
                      <li>• Commercial/Investment Partner Networking</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="EnglishInfo-section-content" id="EnglishInfo-section-content2">
              <div className="businessarea-img2"></div>
              <ul>
                <li>
                  Zeta Plan Investment Co, Ltd. is an advanced venture capital founded by an elite team of experienced
                  venture capitalists who share the same vision. We strive to become a global independent premier
                  venture capital differentiated from the other VCs with its investment capabilities, outstanding
                  performance, and global expertise.
                </li>
                <li>
                  Our goal is to build a success model as a venture capital in Korea first, and then to become a leading
                  venture capital in Asia.
                </li>
                <li>
                  Maximize enterprise value and investment profit through growth stage customized fund assistance.
                </li>
                <ul>
                  <li>– Early : Entrepreneur with creative technology & innovative idea</li>
                  <li>– Growth : Technology orientated growth enterprise</li>
                  <li>– PE : Enterprise which can</li>
                </ul>
              </ul>
            </div>
            <div className="EnglishInfo-section-content" id="EnglishInfo-section-content3">
              <div className="businessarea-img3"></div>
              <ul>
                <li>
                  Zeta Plan Investment Co. Ltd. specialize in mid-market acquisitions, which means we can often make a
                  personal approach to company owners discreetly and sensitively. We also have a global footprint and we
                  regularly identify targets around the world.
                </li>
                <li>
                  Zeta Plan Investment Co. Ltd. will advise you at all stages of an acquisition, from defining your
                  strategy through to successfully closing the deal. We will identify and evaluate potential acquisition
                  targets, approach the owners, assist on due diligence and valuation, and work closely with you through
                  the final contractual negotiations and Zeta Plan M&A teams of advisors have deep industry expertise
                  and we ensure that every M&A professional possesses a detailed knowledge of the industry, its players,
                  valuations and potential opportunities.
                </li>
              </ul>
            </div>
            <div className="EnglishInfo-section-content" id="EnglishInfo-section-content4">
              <div className="businessarea-img4"></div>
              <ul>
                <li>
                  Zeta Plan Investment Co, Ltd. management consulting services focus on our clients’ most critical
                  issues and opportunities: strategy, marketing, organization, operations, technology, transformation,
                  digital, advanced analytics and mergers & acquisitions, across all industries and geographies.
                </li>
                <li>
                  Zeta Plan Investment Co, Ltd. bring deep, functional expertise, but are known for our holistic
                  perspective: we capture value across boundaries and between the silos of any organization and have
                  proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="EnglishInfo-section5" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Major Performance - Technology Transfer</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div>TECH TRANSFER CASE</div>
          <div className="techtransfercase-img"></div>
        </section>
        <section className="EnglishInfo-section6" id="EnglishInfo-section">
          <h1 className="EnglishInfo-section-title">Location</h1>
          <div className="EnglishInfo-section-bar"></div>
          <div id="map" style={{width: "800px", height: "400px"}}></div>
          <dl>
            <dt>Head Quarter</dt>
            <dd>Add : Namsung Plaza #1210 130, Digital-ro, Geumcheon-gu, Seoul, Korea</dd>
            <dd>Tel : +82-538-4801</dd>
            <dd>Fax : +82-6008-4779</dd>
            <dd>Mail : zetabiz@zetaplan.com</dd>
            <dt>China Branch</dt>
            <dd>Add : 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China</dd>
            <dd>Tel : +86-10-6566-9965(601) Mobile : +82-10-3347-4350</dd>
            <dd>Fax : +86-10-8527-1272 Mail : yytak2000@hanmail.net</dd>
            <dt>Vietnam Branch</dt>
            <dd>Add : No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay District, Hanoi, VietNam</dd>
            <dd>Tel : +84-4-6281-7522 Mobile : +82-10-3347-4350</dd>
            <dd>Fax : +84-91-302-4677 E-Mail : yytak2000@naver.com</dd>
          </dl>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default EnglishInfo;
