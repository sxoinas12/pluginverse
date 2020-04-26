import React from 'react';
import styles from './styles.module.less';

const BaseSearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.testMe} />
      <div className={styles.some}>
        ssss
      </div>
    </div>
  );
};

export default BaseSearchBar;
