import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/actions';

const Home = (props) => {
  useEffect(() => {
    props.getHomeList();
  }, [])

  function getList() {
    return <ul>{props.list.map(item => {
      return <li key={item.id}>{item.login}</li>
    })}
    </ul>
  };

  return <div>
    <Header />
    <div>welcome to home, {props.name}!!!</div>
    {getList()}
    <button onClick={() => alert('客户端中绑定事件成功')}>Click</button>
  </div>
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
