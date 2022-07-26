import React, { useState } from 'react';
import '../../css/Notice/noticeRequest.css';
import { useNavigate } from 'react-router-dom';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import categoryData from '../../component/Notice/NoticeRequestCategoryData';
import { handleCategoryFnc } from '../../component/Notice/noticeRequestFnc';
import { handleInputFnc } from '../../component/Notice/noticeRequestFnc';
import { handleChkBoxFnc } from '../../component/Notice/noticeRequestFnc';
import { submitFnc } from '../../component/Notice/noticeRequestFnc';
import { goBack } from '../../component/Notice/noticeRequestFnc';

const NoticeRequest = ({title, sub}) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const [categoryNum, setCategoryNum] = useState(0);
  const [input, setInput] = useState({
    category: '',
    categoryDetail: [],
    title: '',
    name: '',
    tel: '',
    position: '',
    companyName: '',
    companyGroup: '',
    companyType: '',
    companyAddr: '',
    currentSale: '',
    projectionSale: '',
    contents: ''
  });
  const submitFnc = (e) => {
    // form 제출 함수
    e.preventDefault();
    alert('작성하신 컨설팅요청이 전송되었습니다. 메인페이지로 이동합니다.');
    // 이메일로? 암튼 컨설팅 form이 처리되는 로직 추가
    navigate('/'); 
  }
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <NoticeHeader title={title} sub={sub}/>

      <div id="SubInner">
        <div className="company-title-container">
          <h2 className="company-title">컨설팅신청</h2>
          <div className="company-title-line"></div>
        </div>
        <span className='notice-request-refer'>&#42; 는 필수 작성</span>
        <form action="" id='requestForm' onSubmit={submitFnc}>
          <table className='request-form-table'>
            <colgroup>
              <col style={{width: '28%'}} />
              <col style={{width: '72%'}} />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  컨설팅 분야 *
                </th>
                <td>
                  <select name="category" className='consulting-category' required onChange={(e)=>{
                    handleInputFnc(e, input, setInput);
                    handleCategoryFnc(e, input, setInput, categoryNum, setCategoryNum, setChecked, categoryData);
                  }}>
                    <option value="none">-- 컨설팅 분야를 선택해주세요. --</option>
                    <option value="M&amp;A구조조정">M&amp;A구조조정</option>
                    <option value="기업공개(IPO)">기업공개(IPO)</option>
                    <option value="기업인증">기업인증</option>
                    <option value="정책자금">정책자금</option>
                    <option value="경영자문">경영자문</option>
                    <option value="품질/시스템">품질/시스템</option>
                  </select>
                  <div className='request-category-chkbox'>
                    {
                      categoryNum
                      ? categoryData[categoryNum-1].detail.map((ele, idx)=>{
                        return (
                          <span className='category-chkbox-item' key={idx}>
                            <input type="checkbox" value={ele || ''} id={'category' + idx} name="categoryDetail" checked={checked[idx]} onChange={(e)=>{
                              handleChkBoxFnc(e, idx, checked, setChecked, input, setInput)
                          }}/>
                            <label htmlFor={"category" + idx}>{ele}</label>
                          </span>
                        )
                      })
                      : null
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="FormTitle">제목 *</label>
                </th>
                <td><input type="text" id='FormTitle' name='title' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userName">성명 *</label>
                </th>
                <td><input type="text" id='userName' name='name' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userTel">연락처 *</label>
                </th>
                <td><input type="text" id='userTel' name='tel' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userPos">직책 *</label>
                </th>
                <td><input type="text" id='userPos' name='position' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="companyName">회사명 *</label>
                </th>
                <td><input type="text" id='companyName' name='companyName' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  회사 분류
                </th>
                <td>
                  <select name="companyGroup" onChange={handleInputFnc}>
                    <option value="">--분류를 선택해주세요. --</option>
                    <option value="거래소기업">거래소기업</option>
                    <option value="코스닥기업">코스닥기업</option>
                    <option value="프리보드기업">프리보드기업</option>
                    <option value="장외거래기업">장외거래기업</option>
                    <option value="외부감사기업">외부감사기업</option>
                    <option value="비상장기업">비상장기업</option>
                    <option value="기술거래">기술거래</option>
                    <option value="개인기업">개인기업</option>
                  </select>  
                </td>
              </tr>
              <tr>
                <th>
                  회사 업종
                </th>
                <td>
                  <select name="companyType" onChange={handleInputFnc}>
                    <option value="">-- 업종을 선택해주세요. --</option>
                    <option value="농림수산업/광업">농림수산업/광업</option>
                    <option value="식품/생활용품">식품/생활용품</option>
                    <option value="섬유/의복/신발">섬유/의복/신발</option>
                    <option value="제지/출판">제지/출판</option>
                    <option value="화학/정유/석유">화학/정유/석유</option>
                    <option value="고무/플라스틱">고무/플라스틱</option>
                    <option value="전기/전자/통신">전기/전자/통신</option>
                    <option value="기계/장비/금속">기계/장비/금속</option>
                    <option value="의료/정밀기기">의료/정밀기기</option>
                    <option value="부품/소재">부품/소재</option>
                    <option value="의약/바이오">의약/바이오</option>
                    <option value="금융">금융</option>
                    <option value="건설/토목">건설/토목</option>
                    <option value="컴퓨터/방송/영상">컴퓨터/방송/영상</option>
                    <option value="소프트웨어">소프트웨어</option>
                    <option value="인터넷">인터넷</option>
                    <option value="물류/유통/도소매">물류/유통/도소매</option>
                    <option value="운송/통신서비스">운송/통신서비스</option>
                    <option value="오락/문화서비스">오락/문화서비스</option>
                    <option value="교육/기술서비스">교육/기술서비스</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="companyAddr">회사 주소 *</label>
                </th>
                <td><input type="text" id='companyAddr' name='companyAddr' required onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="currentSale">당기 매출</label>
                </th>
                <td><input type="text" id='currentSale' name='currentSale' onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="projectionSale">예상 매출</label>
                </th>
                <td><input type="text" id='projectionSale' name='projectionSale' onChange={handleInputFnc} /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="contents" className='contents-title'>상담신청 내용</label>
                </th>
                <td><textarea id='contents' name='contents' required onChange={handleInputFnc} /></td>
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
            <button type="submit" className='request-submit-btn'>신청하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>

      <DetailFooter />
    </div>
  );
};

export default NoticeRequest;