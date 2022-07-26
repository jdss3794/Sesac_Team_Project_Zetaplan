import React from 'react';

const AbroadSupport3 = () => {
  return (
    <div>
      <section className='abroad-content-box'>
        <h4 className='abroad-title'>
          사업 안내
        </h4>
        <p className='abroad-desc'>
          해외조직망을 보유한 기관이 수출유망기업의 해외지사와 같은 역할을 수행하며 시장 조사, 수출 거래선 발굴에서 거래성사 단계에 이르기까지 국내기업의 해외 판로 개척활동을 지원해드리는 사업입니다.
        </p>
      </section>

      <section className='abroad-content-box'>
        <h4 className="abroad-title">
          지원 서비스
        </h4>
        <h6 className="abroad-sub-title">지원대상 및 한도</h6>
        <ul className='abroad-desc-list'>
          <li>· 국내 사업자등록번호를 보유하고 있는 중소·중견기업</li>
          <li>· 기업별로 최대 10개 지역 참여 가능<br/>
              – 일부 조건* 충족시 최대 12건까지 참여 가능<br/>
              *일자리 으뜸기업(2018), 청년친화 강소기업(2019)
          </li>
        </ul>
        <h6 className='abroad-sub-title'>지원 내용</h6>
        <table className='abroad-desc-table abroad-desc-table-center'>
          <colgroup>
            <col style={{width: "10%"}} />
            <col style={{width: "40%"}} />
            <col style={{width: "10%"}} />
            <col style={{width: "20%"}} />
            <col style={{width: "20%"}} />
          </colgroup>
          <thead>
            <tr>
              <th>단계</th>
              <th>주요 지원내용</th>
              <th>기간</th>
              <th>업체부담금 (총 사업비)</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>진입</td>
              <td>기초 마케팅 지원 : 시장조사, 바이어 발굴, 네트워크 교류(현지 유대감 형성), 기초홍보자료 현지화, 시장성 테스트</td>
              <td>6개월</td>
              <td>50만원(400만원)</td>
              <td></td>
            </tr>
            <tr>
              <td>발전</td>
              <td>
                마케팅 및 수출지원 : 수출성약 지원, 전시·상담회 참가 지원, 물류 통관자문, 출장지원, 기존 거래선 관리, 현지 유통망 입점, 인허가 취득지원, 브랜드 홍보, 프로젝트 참가, IP등록, 현지법인 설립지원
              </td>
              <td>1년</td>
              <td>250만원~350만원(900만원)</td>
              <td>지역별 차등</td>
            </tr>
            <tr>
              <td>확장</td>
              <td>
                수출 및 현지화 지원 : 기술수출(제휴), 글로벌 벨류체인 진출, 해외투자 유치, 조달진출, 품목별 타겟진출, 인큐베이팅 서비스, 현지투자 지원(법인설립), 법률자문
              </td>
              <td>1년</td>
              <td>700만원~1,050만원(2,000만원~3,000만원)</td>
              <td>지역별 차등</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='abroad-content-box'>
        <h4 className="abroad-title">
          신청·접수
        </h4>
        <h6 className='abroad-sub-title'>접수기간</h6>
        <p className='abroad-desc'>· 2월, 6월 모집 및 선정</p>
        <h6 className='abroad-sub-title'>신청방법</h6>
        <p className='abroad-desc'>· 온라인 신청 www.exportvoucher.com (한글 www.수출바우처.com)<br/> * 수출바우처 홈페이지→해외지사화사업 온라인 신청</p>
        <h6 className='abroad-sub-title'>문의사항</h6>
        <p className='abroad-desc'>· (주)제타플랜인베스트 (02-538-4801)</p>
      </section>
    </div>
  );
};

export default AbroadSupport3;