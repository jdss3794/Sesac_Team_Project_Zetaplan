import React, { useState } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useNavigate } from 'react-router-dom'; 
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';

const NoticeInquiryForm = ({ title, sub }) => {
  const navigate = useNavigate();
  const editorRef = useRef();
  const [input, setInput] = useState({
    title: '',
    author: '',
    password: '',
    lock: '',
    contents: '',
    thumbnail: [],
    file1: [],
    file2: [],
    searchRange: ''
  })
  const handelChkBox = (e) => {
    // 비밀글 checkbox의 check여부에 따라 다른 값을 state에 저장
    e.target.checked
    ? setInput({...input, lock: '비밀글'})
    :setInput({...input, lock: '비밀글 해제'})
  }
  const handleInputFnc = (e) => {
    setInput(e.target.type==='file' 
    ? {...input, [e.target.name]: e.target.files} 
    : {...input, [e.target.name]: e.target.value})
  }
  const handleSubmitFnc = (e) => {
    // 문의 글 제출 함수
    e.preventDefault();
    alert('문의 글 작성이 완료되었습니다.');
    navigate('/notice/inquiry');
  }
  const goBack = ()=>{
    // 취소버튼 클릭시 이전페이지로 이동
    navigate(-1);
  }

  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">
          문의하기
        </h2>
        <form action="" id='requestForm' onSubmit={handleSubmitFnc}>
          <table className='request-form-table'>
            <colgroup>
              <col style={{width: "27%"}} />
              <col style={{width: "63%"}} />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="inquiryTitle">제목</label>
                </th>
                <td>
                  <input type="text" id='inquiryTitle' name='title' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="inquiryAuthor">작성자</label>
                </th>
                <td>
                  <input type="text" id='inquiryAuthor' name='author' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="inquiryPw">비밀번호</label>
                </th>
                <td>
                  <input type="password" id='inquiryPw' name='password' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>
                  비밀글
                </th>
                <td>
                  <input type="checkbox" id='inquiryLock' name='lock' onChange={handelChkBox} />
                  <label htmlFor="inquiryLock">비밀글로 작성하겠습니다.</label>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='inquiryContents' className='contents-title'>문의 내용</label>
                </th>
                <td>
                  <div className='editor-box'>
                    <Editor
                      placeholder="내용을 입력해주세요."
                      previewStyle="vertical" // 미리보기 스타일 지정
                      height="500px" // 에디터 창 높이
                      initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                      toolbarItems={[
                        // 툴바 옵션 설정
                        ['heading', 'bold', 'italic', 'strike'],
                        ['hr', 'quote'],
                        ['ul', 'ol', 'task', 'indent', 'outdent'],
                      ]}
                      useCommandShortcut={false}
                      language="ko-KR"
                      hideModeSwitch={true}
                      ref={editorRef}
                      onChange={()=>{
                        const contentsData = editorRef.current.getInstance().getHTML()
                        setInput({...input, contents: contentsData})
                      }}
                    ></Editor>
                  </div>
                </td>
              </tr>
              <tr>
                <th>썸네일</th>
                <td>
                  <input type="file" name='thumbnail' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td>
                  <input type="file" name='file1' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>첨부파일2</th>
                <td>
                  <input type="file" name='file2' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>통합검색</th>
                <td>
                  <select id="inquirySearchRange" name='searchRange' onChange={handleInputFnc}>
                    <option value="제목과 내용">제목과 내용 검색허용</option>
                    <option value="제목만">제목만 검색허용(비밀글)</option>
                    <option value="비허용">통합검색 제외</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn-group">
            <button type='submit' className='request-submit-btn'>문의하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiryForm;