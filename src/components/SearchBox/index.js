import React from 'react';
import searchIcon from '@assets/icons/search-icon.svg';
import styles from './styles.module.less';

const SearchBox = () => (
  <span className={styles.searchBox}>
    <img src={searchIcon} alt="Search icon" className={styles.left} />
    <input className={styles.box} placeholder="Search" label="Search"/>
  </span>
);

export default SearchBox;
