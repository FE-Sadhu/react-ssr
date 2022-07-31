import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './src/containers/Home';

export default (
  <div>
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes>
  </div>
)
