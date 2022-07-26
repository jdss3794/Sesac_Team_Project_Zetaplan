import React from 'react';

const AbroadSupport2 = () => {
  return (
    <div>
      <section className='abroad-content-box'>
        <h4 className='abroad-title'>사업 안내</h4>
        <p className='abroad-desc'>
          · 기업에 바우처를 부여하고, 바우처를 받은 기업은 다양한 수출활동 메뉴판에서 필요한 서비스, 원하는 서비스(수행)기관을 직접 선택해서 수출 마케팅을 진행하는 방식으로 지원되는 신개념 수출 지원 사업 플랫폼입니다.
        </p>
      </section>

      <section className='abroad-content-box'>
        <h4 className='abroad-title'>지원대상</h4>
        <table className='abroad-desc-table abroad-desc-table-center'>
          <colgroup>
            <col style={{width: '8%'}} />
            <col style={{width: '12%'}} />
            <col style={{width: '18%'}} />
            <col style={{width: ''}} />
            <col style={{width: '14%'}} />
            <col style={{width: '14%'}} />
          </colgroup>
          <thead>
            <tr>
              <th>주무부처</th>
              <th>구분</th>
              <th>세부사업명(기업수)</th>
              <th>지원 대상</th>
              <th>기업별 국고 지원한도</th>
              <th>국고 보조율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan='8'>중기부</td>
              <td rowSpan='4'>성장바우처</td>
              <td>내수기업</td>
              <td>전년도 직접수출 ‘0’</td>
              <td>30백만원</td>
              <td rowSpan='8'>
                매출 규모에 따라 50% ~ 70%
                <ul>
                  <li>100억 미만 (70%)</li>
                  <li>100-300억 미만 (60%)</li>
                  <li>300억 이상 (50%)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>수출초보기업</td>
              <td>전년도 직접수출 ‘10만불 미만’</td>
              <td>30백만원</td>
            </tr>
            <tr>
              <td>수출유망기업</td>
              <td>전년도 직접수출 ‘10~100만불 미만’</td>
              <td>50백만원</td>
            </tr>
            <tr>
              <td>수출성장기업</td>
              <td>전년도 직접수출 ‘100~500만불 미만’</td>
              <td>80백만원</td>
            </tr>
            <tr>
              <td rowSpan='4'>혁신바우처</td>
              <td>글로벌강소기업</td>
              <td>글로벌 강소기업 및 소재부품장비 강소기업(수출 500만불 이상) 지정 유효기업</td>
              <td>100백만원</td>
            </tr>
            <tr>
              <td>브랜드K기업</td>
              <td>브랜드 K 선정기업</td>
              <td>30~100백만원</td>
            </tr>
            <tr>
              <td>규제자유특구</td>
              <td>규제 자유특구 입주기업</td>
              <td>30~100백만원</td>
            </tr>
            <tr>
              <td>스마트제조혁신</td>
              <td>스마트공장 보급기업</td>
              <td>30~100백만원</td>
            </tr>
            <tr>
              <td rowSpan='4'>산업부</td>
              <td rowSpan='4'>수출바우처<br/>통합형</td>
              <td>중견글로벌 지원사업</td>
              <td>
                <ul>
                  <li>(Pre)후보·예비 중견기업</li>
                  <li>(중견글로벌)월드클래스 기업·중견기업</li>
                  <li>(Post) 중견글로벌 졸업기업</li>
                </ul>
              </td>
              <td>60~100백만원</td>
              <td>30% ~ 70%</td>
            </tr>
            <tr>
              <td>소재·부품·장비 선도기업</td>
              <td>소재·부품·장비분야 국내 중소·중견기업</td>
              <td>14~70백만원</td>
              <td>50%-70%</td>
            </tr>
            <tr>
              <td>소비재선도기업</td>
              <td>5대 소비재 분야 유망중소·중견기업</td>
              <td>14~39백만원</td>
              <td>50%-70%</td>
            </tr>
            <tr>
              <td>서비스선도기업</td>
              <td>서비스 분야 유망중소·중견기업</td>
              <td>30~28백만원</td>
              <td>50%-70%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='abroad-content-box'>
        <h4 className='abroad-title'>지원내용</h4>
        <dl className='abroad-desc-list'>
          <dt>조사/일반 컨설팅</dt>
          <dd>· 정보 조사 및 법무·세무·회계를 제외한 수출관련 일반 컨설팅 지원</dd>
          <dt>통번역</dt>
          <dd>· 수출을 위한 기업의 활동에 필요한 외국어 통번역 서비스 지원</dd>
          <dt>역량강화 교육</dt>
          <dd>· 수출역량강화를 위한 교육 제공 및 지원</dd>
          <dt>특허/지재권/시험</dt>
          <dd>· 특허·지재권 취득, 시험 대행 등 해당 분야 전문 서비스 지원</dd>
          <dt>서류대행/ 현지등록/환보험</dt>
          <dd>· 수출·무역·현지진출 관련 필요 서류 작성 대행 및 현지 등록, 환보험 서비스 지원</dd>
          <dt>홍보/광고</dt>
          <dd>· 기업/제품/브랜드의 해외 마케팅을 위한 홍보 및 광고 지원</dd>
          <dt>브랜드 개발‧관리</dt>
          <dd>· 수출브랜드의 개발과 관리를 위한 마케팅 지원</dd>
          <dt>전시회/행사/ 해외영업지원</dt>
          <dd>· 전시회/상담회/세미나 등 수출관련 행사 기획·지원 및 해외영업지원을 통한 수출 지원</dd>
          <dt>법무‧세무‧회계 컨설팅</dt>
          <dd>· 해외진출을 위한 법무·세무·회계 관련 전문 컨설팅 지원</dd>
          <dt>디자인 개발</dt>
          <dd>· 해외 진출에 필요한 외국어 디자인 개발 지원</dd>
          <dt>홍보 동영상</dt>
          <dd>· 해외 진출에 필요한 외국어 홍보동영상 개발 지원</dd>
          <dt>해외규격인증</dt>
          <dd>· 해외규격인증 취득을 위한 시험·심사·인증 및 인증대행컨설팅 등 해당 분야 전문 서비스지원<br/>*컨설팅비: 해외인증분야 수행기관 이용시 제한적으로 컨설팅비 처리</dd>
        </dl>
      </section>
      
      <section className='abroad-content-box'>
        <h4 className='abroad-title'>진행 절차</h4>
        <div className="abroad-content-img">
          <img src="/img/Abroad/AbroadSupport/수출바우처 진행절차.jpg" alt="수출바우처 진행절차" />
        </div>
      </section>

      <section className='abroad-content-box'>
        <h4 className='abroad-title'>신청·접수</h4>
        <h6 className='abroad-sub-title'>신청기간</h6>
        <p className='abroad-desc'>· 년 2~3회 모집</p>
        <h6 className='abroad-sub-title'>문의사항</h6>
        <p className='abroad-desc'>· (주)제타플랜인베스트 (02-538-4801)</p>
        <h6 className="abroad-sub-title">
          수출바우처 홈페이지(www.exportvoucher.com)를 통한 온라인신청
        </h6>
      </section>
    </div>
  );
};

export default AbroadSupport2;