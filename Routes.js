import Home from './src/containers/Home';
import Login from './src/containers/Login'
import React from 'react'

export default [{
  path: '/',
  element: <Home />,
  loadData: Home.loadData,
  key: 'home'
}, {
  path: '/login',
  element: <Login />,
  key: 'login'
}];
