import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

const Home = (props) => {
  return <div>
    <Header />
    <div>welcome to home, {props.name}!!!</div>
    <button onClick={() => alert('客户端中绑定事件成功')}>Click</button>
  </div>
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home);
