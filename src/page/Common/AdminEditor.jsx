import React, { useState } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
import { useNavigate } from 'react-router-dom'; 
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef } from 'react';
import './../../css/Common/editor.css';

const AdminEditor = ({admin}) => {
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
  const handleInputFnc = (e) => {
    setInput(e.target.type==='file' 
    ? {...input, [e.target.name]: e.target.files} 
    : {...input, [e.target.name]: e.target.value})
  }
  const handleSubmitFnc = (e) => {
    // 문의 글 제출 함수
    e.preventDefault();
    alert('글 작성이 완료되었습니다.');
    navigate('/notice/');
  }
  const goBack = ()=>{
    // 취소버튼 클릭시 이전페이지로 이동
    navigate(-1);
  }

  return (
    <div>
      <NoticeHeader title="Notice" sub="공지사항" />
      <div id="SubInner">
        <h2 className="detail-title">
          관리자 글쓰기
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
                  <label htmlFor="editorTitle">분류</label>
                </th>
                <td>
                  <select name="boardGroup" onChange={handleInputFnc}>
                    <option value="">--게시판을 선택해주세요. --</option>
                    <option value="공지사항">공지사항</option>
                    <option value="뉴스">뉴스</option>
                    <option value="기업지원정보">기업지원정보</option>
                    <option value="컨설팅실적">컨설팅실적</option>
                    <option value="문의하기">문의하기</option>
                    <option value="산업 별 이슈">산업 별 이슈</option>
                    <option value="기술거래">기술거래</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="editorTitle">제목</label>
                </th>
                <td>
                  <input type="text" id='inquiryTitle' name='title' onChange={handleInputFnc} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="editorAuthor">작성자</label>
                </th>
                <td>
                  <span className='editor-admin'>관리자</span>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='inquiryContents' className='contents-title'>내용</label>
                </th>
                <td>
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
                    <option value="제목만">제목만 검색허용</option>
                    <option value="비허용">통합검색 제외</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn-group">
            <button type='submit' className='request-submit-btn'>작성하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>
      <DetailFooter />
    </div>
  );
};

export default AdminEditor;