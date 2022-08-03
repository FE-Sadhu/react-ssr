import Home from './containers/Home';
import Login from './containers/Login'
import React from 'react'

export default [{
  path: '/',
  component: Home,
  exact: true,
  loadData: Home.loadData,
  key: 'home'
}, {
  path: '/login',
  component: Login,
  exact: true,
  key: 'login'
}];
