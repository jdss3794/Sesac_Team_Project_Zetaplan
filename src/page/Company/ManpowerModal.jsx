import React from 'react';
import { VscClose } from 'react-icons/vsc';

const ManpowerModal = ({contents, modalOpen, setModalOpen, boxMargin}) => {
  const closeBox = () => {
    setModalOpen(!modalOpen);
  }

  return (
      <div className={modalOpen ? `ex-box on` : `ex-box off`} style={{top: `${boxMargin}px`}}>
        <div className='ex-inner-box'>
          <div className='ex-name'>
            <h5>
              <span className='item-name2'>{contents.name}</span> &nbsp;
              <span className='item-position2'>{contents.position}</span>
            </h5>
            <button onClick={closeBox}>
              <VscClose className='close-icon' size='40px' />
            </button>
          </div>
          <div className='ex-sentence'>
            <div className='sentence-text'>
              <p className='item-detail'>{contents.detail}</p>
              <br></br>
              <p className='item-subposition'>{contents.subposition}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ManpowerModal;