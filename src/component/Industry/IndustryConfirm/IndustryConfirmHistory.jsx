import React from 'react';
import { useNavigate } from "react-router-dom";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";
import './../../../css/Indusrty/industryConfirm.css';

const IndustryConfirmHistory = ({id}) => {
  const navigate = useNavigate();
  let plus = 0;
  let minus = 0;
  
  if ( id === 0 ) {
    minus = 17;
  } else if ( id === 18 ) {
    minus = 31;
  } else {
    minus = id - 1;
  }

  if ( id === 17) {
    plus = 0;
  } else if ( id === 31) {
    plus = 18;
  } else {
    plus = id + 1;
  }

	// 뒤로가기
	// 인덱스로 처리, 두번 뒤로 가고싶으면 -2
	const handleGoBack = () => {
    navigate(`/industry/confirm/detail/${minus}`);
	}

	// 홈으로 가기
	const handleGoHome = () => {
		navigate('/industry/confirm/');
	}

  const handleGoNext = () => {
		navigate(`/industry/confirm/detail/${plus}`);
	}

  return (
    <div id='IndustryConfirmHistory'>
      <button className='industry-confirm-back-btn' name="back" onClick={handleGoBack}><GrPrevious fill='#2c3540' size='16px' /></button>
      <button className='industry-confirm-home-btn' name="go" onClick={handleGoHome}><GrClose fill='#2c3540' size='16px' /></button>
      <button className='industry-confirm-next-btn' name="next" onClick={handleGoNext}><GrNext fill='#2c3540' size='16px' /></button>
    </div>
  );
};

export default IndustryConfirmHistory;