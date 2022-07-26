import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Common/login.css';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from "react-icons/gr";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [adminAccount, setAdminAccount] = useState('');
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });
  const [adminID, setAdminID] = useState('');
  const [adminPW, setAdminPW] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  useEffect( () => {
    fetch('/data/admin.json')
      .then((response) => response.json())
      .then((response) => setAdminAccount(response));
  }, []);

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    setAdminID(e.target.value);
    setAdminPassword(e.target.value);
    if(e.key === "Enter") {
      checkID(e);
    }
  };

  const checkID = () => {
    console.log(adminAccount[0].id)
    if ( adminID === adminAccount[0].id ) {
      setAdminPW(true);
    } else {
      alert("아이디가 틀렸습니다.")
    }
  }

  const checkPW = () => {
    if ( adminPassword === adminAccount[0].password) {
      setAuth(true);
      navigate('/notice/')
    } else {
      alert("비밀번호가 틀렸습니다.")
    }
  }

  const onKeyPressID = (e) => {
    if(e.key === "Enter") {
      checkID();
    }
  }

  const onKeyPressPW = (e) => {
    if(e.key === "Enter") {
      checkPW();
    }
  }

  return (
    <div className='login-page'>
      <Header />
      <div id='SubInner'>
        <h2 className="detail-title">로그인</h2>
        <div className='login'>
          <span className='company-road-part'>관리자 로그인 페이지</span>
          <form className='login-box'>
            <div className='login-id'>
              <label htmlFor='admin_id'>ID : </label>
              <input type='text' name='admin_id' onKeyPress={onKeyPressID} onChange={onChangeAccount} />
              <button type='button' className='login-check-id-btn' onClick={checkID}><GrFormNext size="26px" /></button>
            </div>
            <div className={adminPW === true ? 'login-password on' : 'login-password'}>
              <label htmlFor='admin_pw'>PW : </label>
              <input type='password' name='admin_pw' onKeyPress={onKeyPressPW} onChange={onChangeAccount} />
            </div>
            <div>
              <button type='button' onClick={checkPW} className={ adminPW === true ? 'login-submit-btn on' : 'login-submit-btn' }>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Login;
