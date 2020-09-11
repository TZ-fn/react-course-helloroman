import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = () => (
  <div>
    <img scr={logoImage} />
    <HeaderNavigation />
  </div>
);

export default Header;