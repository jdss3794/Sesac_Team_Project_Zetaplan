import React from 'react';
import { RiMessage3Fill } from "react-icons/ri";
import './subChatBox.css';

const SubChatBox = () => {
  return (
    <div id='SubChatBox'>
      <a href="/notice/request" className='chatbox-btn'><RiMessage3Fill size='2.4rem' fill='#efefef' /></a>
    </div>
  );
};

export default SubChatBox;