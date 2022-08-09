import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: yellow;
`;

const Header = () => {
  return <HeaderWrapper>
    <Link to={'/'}>navToHome</Link>
    -
    <Link to={'/login'}>navToLogin</Link>
  </HeaderWrapper>
}

export default Header;