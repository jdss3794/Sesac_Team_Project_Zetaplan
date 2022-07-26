import React from 'react';

const IndustryValue5 = () => {
    return (
        <div id='IndustryValue'>
        <section className='industry-value-section'>
          <h2 className="industry-value-part"> 기술금융투자 </h2>     
          <p className='industry-value-part-txt'>
          벤처투자조합의 투자 대상이 기업 지분이나 프로젝트 등으로 한정되어 있어, 벤처캐피탈은 지식재산권 보유 기업에 대한 지분 투자와 같이 간접적인 방식으로 지식재산권에 투자했으나, 「한국벤처투자조합 관리규정」이 개정(개정 일자 : ‘15.11.16)됨에 따라 창업투자회사 또는 유한회사가 운용하는 벤처투자조합이 지식재산권을 직접 매입․매각할 수 있다.
          </p>

           <div>
            <table id='value-table'>
              <colgroup>
                <col style={{width: "50%"}} />
                <col style={{width: "50%"}} />
              </colgroup>
              <th>현행</th>
              <th>개선</th>
              <tr>
                 <td>
               <dl>
                <dd>중소․벤처기업, 해외투자, 조합 출자, 프로젝트 투자, 조합 지분 인수, M&A 투자	</dd>
               </dl>
              </td>
              <td>
               <dl>
                <dd>현 행 + 지식재산권 투자</dd>
               </dl>
              </td>
             </tr>
             </table>
            </div>

            </section>

          <section className='industry-value-section'>
          <h2 className="industry-value-part">  성장사다리펀드</h2>
          <p className='industry-value-part-txt'>
          성장사다리펀드는 우수한 지식재산권(IP)를 보유한 증소∙중견기업에 투자 방식의 자금을 제공하여 기업의 IP보유에 따른 기회비용을 줄이고 IP활용성을 높이기 위하여 IP투자펀들 조성하여 사업화를 지원하고, 국내 IP 생태계 구축과 국내 IP 금융 활성화를 유도하고 있다.
         </p>
          
         </section> 
         <section className='industry-value-section'>
           <h2 className="industry-value-part">   지원내용</h2>
          <p className='industry-value-part-txt'>
          국내 국책은행 및 시중은행의 기술신용평가기반 무보증 신용대출은 우수기술보유기업에게 저금리로 자금을 지원하며, 기업당 3억 ~ 10억원 규모로 기업의 성장을 지원한다.
           
           </p>
           </section>

<section className='industry-value-section'>
           <h2 className="industry-value-part"> 준비내용</h2>
           <p className='industry-value-part-txt'>
          TCB평가대출을 받고자 하는 기술력 우수중소기업은 TCB평가를 대비하여 회사의 기술사업화 역량(경영주의 기술 경영능력, 기술개발역량, 제품화역량, 영업역량)과 더불어 기술경쟁력(기술우위성, 기술시장규모, 시장경쟁력)에 대한 근거자료를 준비가 필요하다.
           
           </p>
          
          <div>
            <table>
              <colgroup>
                <col style={{width: "15%"}} />
                <col style={{width: "85%"}} />
              </colgroup>
              <tr>
               <th>경영관련</th>
              <td>
               <dl>
                <dd>사업현황, 경영방침, 주요연혁, 주주현황, 사업장 규모, 부동산 소유현황 등</dd>
               </dl>
              </td>
             </tr>
             <tr>
               <th>생산관련</th>
              <td>
               <dl>
                <dd>생산공정, 주요기계시설, 가동상황, 인력현황 등</dd>
               </dl>
              </td>
             </tr>
             <tr>
               <th>재무관련</th>
              <td>
               <dl>
                <dd>매출추이, 이익추이, 재무주요 계정 등</dd>
               </dl>
              </td>
             </tr>
             <tr>
               <th>기술관련 일반</th>
              <td>
               <dl>
                <dd>기술개발인력, 기술개발실적, 관련 업계동향 등</dd>
               </dl>
              </td>
             </tr>
             <tr>
               <th>기술관련 핵심</th>
              <td>
               <dl>
                <dd>핵심기술의 우위성 및 핵심기술 적용 제품 및 유사제품 등</dd>
               </dl>
              </td>
             </tr>
             <tr>
               <th>기술관련 보호</th>
              <td>
               <dl>
                <dd>특허취득 과정, 기술관련 수상, 인증 등</dd>
               </dl>
              </td>
             </tr>
             </table>
            </div>

      </section>
   </div>
    );
};

export default IndustryValue5;