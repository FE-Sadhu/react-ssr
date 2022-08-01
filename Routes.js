import Home from './src/containers/Home';
import Login from './src/containers/Login'
import React from 'react'

export default [{
  path: '/',
  component: Home,
  // exact: true,
  loadData: Home.loadData,
  key: 'home',
  routes: [{
    path: '/ttt',
    component: Login,
    exact: true,
    key: 'ttt',
  }]
}, {
  path: '/login',
  component: Login,
  exact: true,
  key: 'login'
}];
