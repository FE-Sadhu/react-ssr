import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './src/containers/Home';
import Login from './src/containers/Login'

export default (
  <div>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
    </Routes>
  </div>
)
