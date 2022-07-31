import React from 'react';
import Header from '../../components/Header';

const Home = () => {
  return <div>
    <Header />
    <div>welcome to home, sadhu!!!</div>
    <button onClick={() => alert('客户端中绑定事件成功')}>Click</button>
  </div>
}

export default Home;