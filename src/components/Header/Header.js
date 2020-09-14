import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button'
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = () => (
  <header className={styles.wrapper}>
    <img src={logoImage} alt='FavNote logo' className='logo' />
    <HeaderNavigation />
    <Button secondary>new item</Button>
  </header>
);

export default Header;