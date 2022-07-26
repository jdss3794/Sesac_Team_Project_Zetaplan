import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import {GoArrowRight } from 'react-icons/go';
import {IoIosArrowForward} from 'react-icons/io';


const IndustryValue2 = () => {
    return (
        <div>
             <div id='IndustryValue'>
             <section className='industry-value-section'>
                <h2 className="industry-value-part"> TCB 기술평가대출이란?</h2>
                <p className='industry-value-part-txt'>
                TCB를 통한 기술신용평가는 은행이 대출을 결정할 때 기업의 기술력과 신용도를 같이 고려토록 하는 것으로, 은행들이 기존에 사용해오던 재무정보 이외에 기술정보를 추가로 고려함으로써 신용도 판단 예측의 정확성을 높이려는 것이다. 또한, 기술신용평가 결과에 따라 최종적으로 대출이 이루어질지 여부는 은행이 자율적으로 결정하도록 되어 있고, 정책금융 관련 기술신용평가를 의무화하는 것은 은행이 대출 결정시 부도율 예측의 정확성을 높이려는 것이지, 높은 부실 발생률이 예상되는 기업에게 기술신용평가를 근거로 무조건 대출을 해주려는 것이 아니다.  
                 </p>
                </section>
                 <section className='industry-value-section'>
                 <h2 className="industry-value-part">  평가절차</h2>
                
                <p className='industry-value-part-txt'>
                기술신용평가는 자금을 지원하는 금융기관에서 TCB기관으로 평가를 신청하고 금융기관과 TCB간의 평가를 상호협 완료 후, TCB가 기업에게 평가안내와 서류를 요청하고, 제출서류 확인과 현장실사 완료 후 기술신용평가를 완료한다.
                <br />  
                 </p>
                 <div className="process-box">
                   <div className="process-circle">
                     <h2 className="process-num">1</h2>
                     <p className='pocess-des'>기술 신용평가 <br />신청</p>
                   </div>
                   <IoIosArrowForward id='process-arrow' /> 
                   <div className="process-circle">
                     <h2 className="process-num">2</h2>
                     <p className='pocess-des'>평가기업대상<br /> 서류제출</p>
                   </div>
                   <IoIosArrowForward id='process-arrow' /> 
                   <div className="process-circle">
                     <h2 className="process-num">3</h2>
                     <p className='pocess-des'>기술 신용평가 <br />실사</p>
                   </div>
                   <IoIosArrowForward id='process-arrow' /> 
                   <div className="process-circle">
                     <h2 className="process-num">4</h2>
                     <p className='pocess-des'>기술 신용평가<br /> 진행</p>
                   </div>
                   <IoIosArrowForward id='process-arrow' /> 
                   <div className="process-circle">
                     <h2 className="process-num">5</h2>
                     <p className='pocess-des'>기술 신용평가 <br />완료</p>
                     
                   </div>
                 </div>
                 <br />
                 </section>
                 <section className='industry-value-section'>
                 <h2 className="industry-value-part"> 지원내용</h2>
                
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
     </div>
    );
};

export default IndustryValue2;