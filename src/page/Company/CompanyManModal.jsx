import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './../../css/Company/CompanyManpower.css';

const CompanyManModal = ({ item, onClose }) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <div className='overlay'>
      <div className='man-modal-wrap'>
        <div className='modal-top'>
          <h4>{item.name}</h4>
          <h6>{item.position}</h6>
          <AiOutlineCloseCircle
            className='close-button'
            onClick={handleClose}
            fill='#fff'
            size='40px'
          />
        </div>
        <div className='modal-bottom'>
          <span>{item.subposition}</span>
          <p>{item.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyManModal;
