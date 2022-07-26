/* global kakao */
import React, {useEffect} from "react";
import DetailFooter from "../../component/Detail/DetailFooter";
import Header from "../../component/Header/Header";
import "./ChinaInfo.css";

const ChinaInfo = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(39.96654428204684, 116.38673476630021),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(39.96654428204684, 116.38673476630021);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <Header />
      <div id="SubInner">
        <section className="ChineseInfo-section1" id="ChineseInfo-section">
          <h1 className="ChineseInfo-section-title">公司信息</h1>
          <div className="ChineseInfo-section-bar"></div>
          <div className="ChineseInfo-section1-img"></div>
          <div className="ChineseInfo-section1-img-line"></div>
          <ul className="ChineseInfo-section1-content">
            <li>
              <span className="bold">Zeta Plan Investment </span>{" "}
              株式会社成立于2006年，是专门提供风险投资、技术转让、M&A、经营咨询，及海外支持服务的投资咨询公司。中国、亚洲、欧洲和美国正在对大韩民国的生物、IT、环境、能源、医疗、高科技机械、航空、农产品、水产品、媒体、内容、汽车、半导体、高新技术、高级制造技术的商业化、技术转让具体实施投资。
            </li>
            <li>
              尤其是，Zeta Plan
              Investment株式会社与风险事业协会的15,000家公司、中小企业创新协会的15,000家公司、产业及技术开发协会的30,000家公司签订了促进优质技术支持、世界技术商业化、技术转让服务的合同。
            </li>
          </ul>
        </section>
        <section className="ChineseInfo-section2" id="ChineseInfo-section">
          <h1 className="ChineseInfo-section-title">技术转让的重点</h1>
          <div className="ChineseInfo-section-bar"></div>
          <div className="ChineseInfo-section2-content">
            <div>
              Zeta Plan Investment株式会社将业务重点放在促进韩国与中国之间的技术转让上。 <br />{" "}
              向需要技术的大韩民国和中国的企业供应可进行技术转让的技术，扮演着两国之间协商渠道的角色。
            </div>
          </div>
          <div>
            <div className="bold"> - 以中国和全球为中心的国际技术转让网络</div>
            <div className="ChineseInfo-section2-content-img-have">
              <div className="ChineseInfo-section2-content-img"></div>
              <ul className="ChineseInfo-section2-content-img-right">
                <li>Zeta Plan Investment株式会社在15个国家构筑了国际技术转让网络。</li>
                <li>国际技术转让，特别是，在北京、天津、上海、青岛、浙江、温州及香港构筑了技术转让的合作网络。</li>
              </ul>
            </div>
            <div className="ChineseInfo-section2-content-img-worldwide"></div>
          </div>
        </section>
        <section className="ChineseInfo-section3" id="ChineseInfo-section">
          <h1 className="ChineseInfo-section-title">本公司客户</h1>
          <div className="ChineseInfo-section-bar"></div>
          <dl>
            <dt>- 公共机构</dt>
            <dd className="ChineseInfo-section3-public-img"></dd>
            <dt>- 企业客户</dt>
            <dd className="ChineseInfo-section3-company-img"></dd>
            <dt>- 大学客户</dt>
            <dd className="ChineseInfo-section3-univ-img"></dd>
          </dl>
        </section>
        <section className="ChineseInfo-section4" id="ChineseInfo-section">
          <h1 className="ChineseInfo-section-title">业务领域</h1>
          <div className="ChineseInfo-section-bar"></div>
          <div className="ChineseInfo-section-content" id="ChineseInfo-section-content1">
            <div className="businessarea-img1"></div>
            <ul>
              <li>技术转让</li>
              <li>
                未来的技术转让服务不仅要顺应时代趋势展开竞争和实现超越，还是对韩国的商业化项目产生影响的因素。虽然比起寻找及利用合适的外部技术，给现有的人力分配任务会带来更快效果，但这种方法会浪费时间和资源，最终导致失去优先权。
              </li>
              <li>
                为了缓解这种紧张状态，Zeta Plan Investment株式会社正在运营专门负责技术转让业务的业界首创的专家咨询网络。
              </li>
              <li>
                Zeta Plan
                Investment株式会社基于特定技术的需要，凭借下面列出的专门技术，会帮您量身定制为贵公司提供支持的专家团队。
              </li>
            </ul>
            <table>
              <colgroup>
                <col style={{width: "22%"}} />
                <col style={{width: "48%"}} />
                <col style={{width: "30%"}} />
              </colgroup>
              <thead>
                <tr>
                  <th>重点</th>
                  <th> 说明</th>
                  <th> 咨询专业知识</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>重点 说明 咨询专业知识 项目开发</td>
                  <td>丰富的经验、对选择权的知识、让项目实现成功的战略</td>
                  <td>
                    <ul>
                      <li>• 商业化过程工程</li>
                      <li>• 技术研究/监督(Audit)</li>
                      <li>• 办公室系统</li>
                      <li>• 缺口补助(Gap Funding)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>营销</td>
                  <td>为使合作伙伴和大众参与到贵公司的项目和新兴创意事业中来运用最前沿的营销法</td>
                  <td>
                    <ul>
                      <li>• 战略营销</li>
                      <li>• 术营销资料</li>
                      <li>• 社交媒体</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>建立关系</td>
                  <td>通过本公司专家的现有网络接触并扩大贵公司的影响力，或开发鼓励建立关系的项目</td>
                  <td>
                    <ul>
                      <li>• 发展内部利益关系人</li>
                      <li>• 商业/投资合作伙伴网络化</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="ChineseInfo-section-content" id="ChineseInfo-section-content2">
              <div className="businessarea-img2"></div>
              <ul>
                <li>国际风险俱乐部</li>
                <li>
                  Zeta Plan
                  Investment株式会社是共享相同前景的内行风险资本家精英团队打造的高级风险资本。本公司正在为成为拥有投资力量、出色的业绩和国际专门知识，并与其它VC（风险资本）有差别的国际Premium风险资本而全力以赴。
                </li>
                <li>本公司首先在韩国构建风险资本的成功模式之后，下一步的目标是在亚洲成为主导型风险资本。</li>
                <li>通过成长阶段针对性资金支持，将企业价值和投资利润最大化。</li>
                <ul>
                  <li>– 初期：拥有创新技术和创意想法的企业家</li>
                  <li>– 成长：技术导向的成长型企业</li>
                  <li>– PE：可创出协同效应的企业</li>
                </ul>
              </ul>
            </div>
            <div className="ChineseInfo-section-content" id="ChineseInfo-section-content3">
              <div className="businessarea-img3"></div>
              <ul>
                <li>国际M&A合作伙伴</li>
                <li>
                  Zeta Plan
                  Investment株式会社专门从事收购中间市场的业务，对公司所有人采取慎重且敏感的个人接触方法。本公司还奠定国际地位，定期了解掌握全球目标
                </li>
                <li>
                  Zeta Plan
                  Investment株式会社从定义战略开始到交易成功结束为止，在收购的所有阶段将会为贵公司提供咨询服务。本公司了解和评估潜在收购目标后，与公司所有人接触提供实际调查和价值评估，在最终合同协商过程中密切地协助贵公司。Zeta
                  Plan
                  M&A咨询团队拥有深度的行业专门知识，保证所有M&A专家对业界、行为者、价值评估及潜在机会拥有丰厚深度的知识。
                </li>
              </ul>
            </div>
            <div className="ChineseInfo-section-content" id="ChineseInfo-section-content4">
              <div className="businessarea-img4"></div>
              <ul>
                <li>业务咨询</li>
                <li>
                  Zeta Plan
                  Investment株式会社的经营咨询服务将重点放在本公司客户的最重要热点和机会：在所有业界和地区进行营销、组织、运营、技术、变化、数字、高级分析和收购&合并上。
                </li>
                <li>
                  Zeta Plan
                  Investment株式会社虽然引进了深度实用性强的专业知识，但最重要的是以整体论方法而闻名。本公司通过超越所有组织间的界限捕获价值，将部分总合进行优化，而非个别碎片，力证了上升效果（multiplier
                  effect）。
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ChineseInfo-section6" id="ChineseInfo-section">
          <h1 className="ChineseInfo-section-title">公司地址</h1>
          <div className="ChineseInfo-section-bar"></div>
          <img id="map" src="/img/common/china_map.png" alt="" style={{width: "800px", height: "400px"}} />
          <dl>
            <dt>总部</dt>
            <dd>地址 : 大韩民国，首尔衿川区，Digital路130，NAMSUNG PLAZA #1210</dd>
            <dd>电话 : +82-538-48011</dd>
            <dd>传真 : +82-6008-4779</dd>
            <dd>邮箱 : zetabiz@zetaplan.com</dd>
            <dt>中国分公司</dt>
            <dd>地址 : 中国北京市西城区黄寺大街23号6层</dd>
            <dd>电话 : 18721162574</dd>
            <dd>邮箱 : yytak2000@hanmail.net</dd>
            <dt>越南分公司 </dt>
            <dd>地址 : No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay District, Hanoi, VietNam</dd>
            <dd>电话 : +84-4-6281-7522 手机 : +82-10-3347-4350</dd>
            <dd>传真 : +84-91-302-4677 邮箱 : yytak2000@naver.com</dd>
          </dl>
        </section>
      </div>
      <DetailFooter />
    </div>
  );
};

export default ChinaInfo;
