import React from 'react';
import Header from '../../components/Header';

const Login = () => {
  return <div>
    <Header />
    <div>welcome to Login, sadhu!!!</div>
    <button onClick={() => alert('客户端中绑定事件成功 Login')}>Click</button>
  </div>
}

export default Login;