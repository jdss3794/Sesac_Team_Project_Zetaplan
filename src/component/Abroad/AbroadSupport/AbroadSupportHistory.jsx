import React from 'react';
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const AbroadSupportHistory = ({id}) => {
  const navigate = useNavigate();
  const currentId = parseInt(id);
  // id의 범위는 0~7
  // id가 0보다 작아지면 id를 7로 설정
  // id가 7보다 커지면 id를 0으로 설정

  const goBack = () => {
    let backNum = currentId - 1 < 0 ? 7 : currentId - 1;
    navigate(`/abroad/case/detail/${backNum}`);
  }
  const goNext = () => {
    let goNum = currentId + 1 > 7 ? 0 : currentId + 1;
    navigate(`/abroad/case/detail/${goNum}`);
  }
  const goCase = () => {  
    navigate('/abroad/case');
  }

  return (
    <div id='AbroadSupportHistory'>
      <button onClick={goBack}>
        {/* 이전 */}
        <GrPrevious />
      </button>
      <button onClick={goCase}>
        {/* 나가기 */}
        <GrClose />
      </button>
      <button onClick={goNext}>
        {/* 다음 */}
        <GrNext />
      </button>
    </div>
  );
};

export default AbroadSupportHistory;