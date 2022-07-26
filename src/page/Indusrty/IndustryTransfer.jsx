import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import { useNavigate } from 'react-router-dom';
import './../../css/Indusrty/industryTransfer.css';

const IndustryTransfer = ({title, sub}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  const submitConfirm = () => {
    navigate('/')
    alert("신청서가 접수되었습니다.")
  }

  return (
    <div id='IndustryTransfer'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className="detail-title">기술이전 신청</h2>
        <div className="industry-transfer-refer-wrap">
          <span className="industry-transfer-refer">&#42;는 필수작성</span>
        </div>
        <form action="" id='requestForm'>
          <table className='request-form-table'>
            <colgroup>
              <col style={{width: '28%'}} />
              <col style={{width: '72%'}} />
            </colgroup>
            <tbody>
              <tr>
                <th>기술 등록</th>
                <td>
                  <select name="category" className='skill-category'>
                    <option value="none">-- 기술등록을 선택해주세요. --</option>
                    <option value="도입희망기술등록">도입희망기술등록</option>
                    <option value="이전희망기술등록">이전희망기술등록</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userName">신청인 &#42;</label>
                </th>
                <td><input type="text" id='userName' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="companyName">회사 &#42;</label>
                </th>
                <td><input type="text" id='companyName' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userPos">직책 &#42;</label>
                </th>
                <td><input type="text" id='userPos' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userEmail">이메일 &#42;</label>
                </th>
                <td><input type="text" id='userEmail' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userTel">전화 &#42;</label>
                </th>
                <td><input type="text" id='userTel' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userPhone">연락처 &#42;</label>
                </th>
                <td><input type="text" id='userPhone' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userEmail">이메일 &#42;</label>
                </th>
                <td><input type="text" id='userEmail' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userAddress">주소 &#42;</label>
                </th>
                <td><input type="text" id='userAddress' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="skillName">기술명 &#42;</label>
                </th>
                <td><input type="text" id='skillName' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  권리형태
                </th>
                <td>
                  <select name="rightGroup">
                    <option value="">--권리형태를 선택해주세요. --</option>
                    <option value="특허">특허</option>
                    <option value="실용신안">실용신안</option>
                    <option value="상표">상표</option>
                    <option value="의장">의장</option>
                    <option value="노하우">노하우</option>
                    <option value="기타">기타</option>
                  </select>  
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="applyNum">출원번호</label>
                </th>
                <td><input type="text" id='applyNum' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="registerNum">등록번호</label>
                </th>
                <td><input type="text" id='registerNum' /></td>
              </tr>
              <tr>
                <th>
                  기술 분야
                </th>
                <td>
                  <select name="companyType">
                    <option value="">--분야 선택해주세요. --</option>
                    <option value="정보통신">정보통신</option>
                    <option value="전기전자">전기전자</option>
                    <option value="기계">기계</option>
                    <option value="소재">소재</option>
                    <option value="토목/건축/건설일반">토목/건축/건설일반</option>
                    <option value="환경">환경</option>
                    <option value="생명과학">생명과학</option>
                    <option value="의료">의료</option>
                    <option value="식품농수축산">식품농수축산</option>
                    <option value="화학/화공">화학/화공</option>
                    <option value="에너지/자원/원자력">에너지/자원/원자력</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label className='contents-title' htmlFor="contents">기술개요 및 기존기술대비 장단점</label>
                </th>
                <td><textarea id='contents' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="applicationField">응용분야</label>
                </th>
                <td><input type="text" id='applicationField' /></td>
              </tr>
              <tr>
                <th>
                  판매희망국가(최대 3개)
                </th>
                <td className='industry-transfer-sales-country'>
                  <select name="countryType">
                    <option value="">--국가를 선택해주세요. --</option>
                    <option value="그리스">그리스</option>
                    <option value="남아프리카">남아프리카</option>
                    <option value="네덜란드">네덜란드</option>
                    <option value="네팔">네팔</option>
                    <option value="노르웨이">노르웨이</option>
                    <option value="뉴질랜드">뉴질랜드</option>
                    <option value="니카라과">니카라과</option>
                    <option value="대만">대만</option>
                    <option value="덴마크">덴마크</option>
                    <option value="도미니카">도미니카</option>
                    <option value="독일">독일</option>
                    <option value="라오스">라오스</option>
                    <option value="러시아">러시아</option>
                    <option value="레바논">레바논</option>
                    <option value="루마니아">루마니아</option>
                    <option value="룩셈부르크">룩셈부르크</option>
                    <option value="마카오">마카오</option>
                    <option value="마케도니아">마케도니아</option>
                    <option value="말레이시아">말레이시아</option>
                    <option value="말리">말리</option>
                    <option value="멕시코">멕시코</option>
                    <option value="모나코">모나코</option>
                    <option value="모로코">모로코</option>
                    <option value="몽골">몽골</option>
                    <option value="미국">미국</option>
                    <option value="미얀바(버마)">미얀바(버마)</option>
                    <option value="바레인">바레인</option>
                    <option value="베네주엘라">베네주엘라</option>
                    <option value="베트남">베트남</option>
                    <option value="벨기에">벨기에</option>
                    <option value="볼리비아">볼리비아</option>
                    <option value="불가리아">불가리아</option>
                    <option value="브라질">브라질</option>
                    <option value="사우디아라비아">사우디아라비아</option>
                    <option value="수단">수단</option>
                    <option value="스리랑카">스리랑카</option>
                    <option value="스웨덴">스웨덴</option>
                    <option value="스위스">스위스</option>
                    <option value="스페인">스페인</option>
                    <option value="시리아">시리아</option>
                    <option value="싱가포르">싱가포르</option>
                    <option value="아랍에미리트연합">아랍에미리트연합</option>
                    <option value="아르헨티나">아르헨티나</option>
                    <option value="아이슬란드">아이슬란드</option>
                    <option value="아일랜드">아일랜드</option>
                    <option value="알제리">알제리</option>
                    <option value="에콰도르">에콰도르</option>
                    <option value="엘살바도르">엘살바도르</option>
                    <option value="영국">영국</option>
                    <option value="예멘">예멘</option>
                    <option value="오만">오만</option>
                    <option value="오스트리아">오스트리아</option>
                    <option value="요르단">요르단</option>
                    <option value="우루과이">우루과이</option>
                    <option value="이라크">이라크</option>
                    <option value="이란">이란</option>
                    <option value="이스라엘">이스라엘</option>
                    <option value="이집트">이집트</option>
                    <option value="이탈리아">이탈리아</option>
                    <option value="인도">인도</option>
                    <option value="인도네시아">인도네시아</option>
                    <option value="일본">일본</option>
                    <option value="중국">중국</option>
                    <option value="체코공화국">체코공화국</option>
                    <option value="칠레">칠레</option>
                    <option value="캐나다">캐나다</option>
                    <option value="태국">태국</option>
                    <option value="터키">터키</option>
                    <option value="프랑스">프랑스</option>
                    <option value="핀란드">핀란드</option>
                    <option value="필리핀">필리핀</option>
                    <option value="한국">한국</option>
                    <option value="헝가리">헝가리</option>
                    <option value="호주">호주</option>
                    <option value="홍콩">홍콩</option>
                  </select>
                  <select name="countryType">
                    <option value="">--국가를 선택해주세요. --</option>
                    <option value="그리스">그리스</option>
                    <option value="남아프리카">남아프리카</option>
                    <option value="네덜란드">네덜란드</option>
                    <option value="네팔">네팔</option>
                    <option value="노르웨이">노르웨이</option>
                    <option value="뉴질랜드">뉴질랜드</option>
                    <option value="니카라과">니카라과</option>
                    <option value="대만">대만</option>
                    <option value="덴마크">덴마크</option>
                    <option value="도미니카">도미니카</option>
                    <option value="독일">독일</option>
                    <option value="라오스">라오스</option>
                    <option value="러시아">러시아</option>
                    <option value="레바논">레바논</option>
                    <option value="루마니아">루마니아</option>
                    <option value="룩셈부르크">룩셈부르크</option>
                    <option value="마카오">마카오</option>
                    <option value="마케도니아">마케도니아</option>
                    <option value="말레이시아">말레이시아</option>
                    <option value="말리">말리</option>
                    <option value="멕시코">멕시코</option>
                    <option value="모나코">모나코</option>
                    <option value="모로코">모로코</option>
                    <option value="몽골">몽골</option>
                    <option value="미국">미국</option>
                    <option value="미얀바(버마)">미얀바(버마)</option>
                    <option value="바레인">바레인</option>
                    <option value="베네주엘라">베네주엘라</option>
                    <option value="베트남">베트남</option>
                    <option value="벨기에">벨기에</option>
                    <option value="볼리비아">볼리비아</option>
                    <option value="불가리아">불가리아</option>
                    <option value="브라질">브라질</option>
                    <option value="사우디아라비아">사우디아라비아</option>
                    <option value="수단">수단</option>
                    <option value="스리랑카">스리랑카</option>
                    <option value="스웨덴">스웨덴</option>
                    <option value="스위스">스위스</option>
                    <option value="스페인">스페인</option>
                    <option value="시리아">시리아</option>
                    <option value="싱가포르">싱가포르</option>
                    <option value="아랍에미리트연합">아랍에미리트연합</option>
                    <option value="아르헨티나">아르헨티나</option>
                    <option value="아이슬란드">아이슬란드</option>
                    <option value="아일랜드">아일랜드</option>
                    <option value="알제리">알제리</option>
                    <option value="에콰도르">에콰도르</option>
                    <option value="엘살바도르">엘살바도르</option>
                    <option value="영국">영국</option>
                    <option value="예멘">예멘</option>
                    <option value="오만">오만</option>
                    <option value="오스트리아">오스트리아</option>
                    <option value="요르단">요르단</option>
                    <option value="우루과이">우루과이</option>
                    <option value="이라크">이라크</option>
                    <option value="이란">이란</option>
                    <option value="이스라엘">이스라엘</option>
                    <option value="이집트">이집트</option>
                    <option value="이탈리아">이탈리아</option>
                    <option value="인도">인도</option>
                    <option value="인도네시아">인도네시아</option>
                    <option value="일본">일본</option>
                    <option value="중국">중국</option>
                    <option value="체코공화국">체코공화국</option>
                    <option value="칠레">칠레</option>
                    <option value="캐나다">캐나다</option>
                    <option value="태국">태국</option>
                    <option value="터키">터키</option>
                    <option value="프랑스">프랑스</option>
                    <option value="핀란드">핀란드</option>
                    <option value="필리핀">필리핀</option>
                    <option value="한국">한국</option>
                    <option value="헝가리">헝가리</option>
                    <option value="호주">호주</option>
                    <option value="홍콩">홍콩</option>
                  </select>
                  <select name="countryType">
                    <option value="">--국가를 선택해주세요. --</option>
                    <option value="그리스">그리스</option>
                    <option value="남아프리카">남아프리카</option>
                    <option value="네덜란드">네덜란드</option>
                    <option value="네팔">네팔</option>
                    <option value="노르웨이">노르웨이</option>
                    <option value="뉴질랜드">뉴질랜드</option>
                    <option value="니카라과">니카라과</option>
                    <option value="대만">대만</option>
                    <option value="덴마크">덴마크</option>
                    <option value="도미니카">도미니카</option>
                    <option value="독일">독일</option>
                    <option value="라오스">라오스</option>
                    <option value="러시아">러시아</option>
                    <option value="레바논">레바논</option>
                    <option value="루마니아">루마니아</option>
                    <option value="룩셈부르크">룩셈부르크</option>
                    <option value="마카오">마카오</option>
                    <option value="마케도니아">마케도니아</option>
                    <option value="말레이시아">말레이시아</option>
                    <option value="말리">말리</option>
                    <option value="멕시코">멕시코</option>
                    <option value="모나코">모나코</option>
                    <option value="모로코">모로코</option>
                    <option value="몽골">몽골</option>
                    <option value="미국">미국</option>
                    <option value="미얀바(버마)">미얀바(버마)</option>
                    <option value="바레인">바레인</option>
                    <option value="베네주엘라">베네주엘라</option>
                    <option value="베트남">베트남</option>
                    <option value="벨기에">벨기에</option>
                    <option value="볼리비아">볼리비아</option>
                    <option value="불가리아">불가리아</option>
                    <option value="브라질">브라질</option>
                    <option value="사우디아라비아">사우디아라비아</option>
                    <option value="수단">수단</option>
                    <option value="스리랑카">스리랑카</option>
                    <option value="스웨덴">스웨덴</option>
                    <option value="스위스">스위스</option>
                    <option value="스페인">스페인</option>
                    <option value="시리아">시리아</option>
                    <option value="싱가포르">싱가포르</option>
                    <option value="아랍에미리트연합">아랍에미리트연합</option>
                    <option value="아르헨티나">아르헨티나</option>
                    <option value="아이슬란드">아이슬란드</option>
                    <option value="아일랜드">아일랜드</option>
                    <option value="알제리">알제리</option>
                    <option value="에콰도르">에콰도르</option>
                    <option value="엘살바도르">엘살바도르</option>
                    <option value="영국">영국</option>
                    <option value="예멘">예멘</option>
                    <option value="오만">오만</option>
                    <option value="오스트리아">오스트리아</option>
                    <option value="요르단">요르단</option>
                    <option value="우루과이">우루과이</option>
                    <option value="이라크">이라크</option>
                    <option value="이란">이란</option>
                    <option value="이스라엘">이스라엘</option>
                    <option value="이집트">이집트</option>
                    <option value="이탈리아">이탈리아</option>
                    <option value="인도">인도</option>
                    <option value="인도네시아">인도네시아</option>
                    <option value="일본">일본</option>
                    <option value="중국">중국</option>
                    <option value="체코공화국">체코공화국</option>
                    <option value="칠레">칠레</option>
                    <option value="캐나다">캐나다</option>
                    <option value="태국">태국</option>
                    <option value="터키">터키</option>
                    <option value="프랑스">프랑스</option>
                    <option value="핀란드">핀란드</option>
                    <option value="필리핀">필리핀</option>
                    <option value="한국">한국</option>
                    <option value="헝가리">헝가리</option>
                    <option value="호주">호주</option>
                    <option value="홍콩">홍콩</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  희망거래유형
                </th>
                <td>
                  <select name="hopeType">
                    <option value="">--유형을 선택해주세요. --</option>
                    <option value="라이센싱">라이센싱</option>
                    <option value="기술매매">기술매매</option>
                    <option value="기술협력">기술협력</option>
                    <option value="투자">투자</option>
                    <option value="OEM(기술+판매)">OEM(기술+판매)</option>
                    <option value="M&A">M&A</option>
                    <option value="기타">기타</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="other">기타</label>
                </th>
                <td><input type="text" id='other' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="priceNum">기술이전 희망금액</label>
                </th>
                <td><input type="text" id='priceNum' /></td>
                <td>~</td>
                <td><input type="text" id='priceNum' /></td>
              </tr>
              <tr>
                <th>
                  기술개발상태
                </th>
                <td>
                  <select name="skillNowType">
                    <option value="">-상태를 선택해주세요. --</option>
                    <option value="특허신청 및 구상단계">특허신청 및 구상단계</option>
                    <option value="이론단계">이론단계</option>
                    <option value="모델개발완료">모델개발완료</option>
                    <option value="시제품생산">시제품생산</option>
                    <option value="완제품생산">완제품생산</option>
                    <option value="시판중">시판중</option>
                    <option value="기타">기타</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label className='contents-title' htmlFor="contents">도입시 필요설비</label>
                </th>
                <td><textarea id='contents' /></td>
              </tr>
              <tr>
                <th>
                  <label className='contents-title' htmlFor="contents">관련색인어</label>
                </th>
                <td><textarea id='contents' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="addFile">첨부파일</label>
                </th>
                <td><input type="file" id='addFile' /></td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn-group">
            <button type="button" className='request-submit-btn' onClick={submitConfirm}>신청하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryTransfer;