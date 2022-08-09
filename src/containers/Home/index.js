import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getHomeList } from './store/actions';

const HomeWrapper = styled.div`
  margin-top: 20px;
  background: red;
`;

const Home = (props) => {
  useEffect(() => {
    !props.list.length && props.getHomeList();
  }, [])

  function getList() {
    return <ul>{props.list.map(item => {
      return <li key={item.id}>{item.login}</li>
    })}
    </ul>
  };

  return <HomeWrapper>
    <div>welcome to home, {props.name}!!!</div>
    {getList()}
    <button onClick={() => alert('客户端中绑定事件成功')}>Click</button>
  </HomeWrapper>
}

// 根 store
Home.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
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
