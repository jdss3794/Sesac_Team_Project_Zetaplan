import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminEditor from './../page/Common/AdminEditor';

const LoginRedirect = ({auth}) => {
  return (
      auth ? <AdminEditor /> : <Navigate to='/login'/>
  );
};

export default LoginRedirect;