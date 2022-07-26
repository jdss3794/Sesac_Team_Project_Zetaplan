import React from 'react';

const InvestBusiness2 = () => {
    return (
        <div id='InvestBusiness2'>
            <section>
                <h3 className='company-road-part'>정의</h3>
                <p>사업 아이디어가 제품화 과정을 거쳐 시장에서 수요를 창출하여 사업이 성공할 가능성의 여부를 체계적이며 합리적인 방법으로 분석하는 것</p>
                <p>신규사업의 타당성 여부를 체계적으로 검토하여 재무.경제적 의사결정에 필요한 기초자료를 제공</p>
            </section>
            <section>
                <h3 className='company-road-part'>필요성</h3>
                <p>사업계획의 객관성을 높이고, 사업시작 전 위험요소 확인이 가능</p>
                <p>제약요소와 문제점을 파악함으로써 창업 기간 단축이 가능</p>
                <p>기업가가 사업의 기술성 시장성, 수익성 등을 파악해봄으로써 해당 업종에 대한 학습의 기회 제공</p>
                <p>기업가의 경영능력 향상과 장애요인에 대한 보완 조치 마련을 가능하게 함</p>
            </section>
            <section>
                <h3 className='company-road-part'>절차</h3>
                <div className='image-investbusines2-container'>
                    <img src="/img/Invest/process02.png" alt="" />
                </div>
            </section>
            <section>
                <h3>평가 요소</h3>
                <table>
                    <tr className='table-header'>
                        <td>구분</td>
                        <td>평가요소</td>
                        <td>평가항목</td>
                    </tr>
                    <tr>
                        <td>창업자 분석</td>
                        <td>창업자 수행 능력</td>
                        <td>
                            <ul>
                                <li>창업자 선천적/후천적 능력</li>
                                <li>창업자의 경영능력 및 사회능력</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>시장성 분석</td>
                        <td>시장 및 시장개척 가능성</td>
                        <td>
                            <ul>
                                <li>아이템 분석</li>
                                <li>시장 특성 및 구조</li>
                                <li>국내외 수급동향 및 중장기 수급 전망</li>
                                <li>유사제품과의 경쟁상태 및 향후 경쟁제품의 출현 가능성</li>
                                <li>국내외 가격 구조 및 가격 동향</li>
                                <li>목표시장 선정 및 판매전략</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>기술성 분석</td>
                        <td>제품 및 기술개발 가능성</td>
                        <td>
                            <ul>
                                <li>제품의 기술수준 품질 성능분석</li>
                                <li>시설 계획 및 생산시설 규모</li>
                                <li>생산자원 검토</li>
                                <li>원재료 조달 검토</li>
                                <li>기술 및 기능인력 확보 전망</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>수익성(경제성) 분석</td>
                        <td>수익성 및 자금조달 가능성</td>
                        <td>
                            <ul>
                                <li>예상매출액과 수지상태 분석</li>
                                <li>제품.상품원가, 마진율, 손익분기점 분석</li>
                                <li>소요자금의 규모 및 조달가능성, 시설 및 운전자금 확보, 자금수지 예상, 차입금 상환능력 검토 등</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default InvestBusiness2;