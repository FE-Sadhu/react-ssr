import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
    <Link to={'/'}>navToHome</Link>
    -
    <Link to={'/login'}>navToLogin</Link>
  </div>
}

export default Header;