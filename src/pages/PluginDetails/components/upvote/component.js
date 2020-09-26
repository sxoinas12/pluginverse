import React from 'react';
import styles from './styles.module.less';

const Upvote = ({ stars }) => {
  return (
    <div className={styles.upvoteWrapper}>
      <div className={styles.upvoteIcon}>
        <img src={require('@assets/icons/arrow-top.svg')} alt="" />
      </div>
      <div className={styles.upvoteText}>Upvote</div>
      <div className={styles.starsText}>{stars || 0}</div>
    </div>
  );
};

export default Upvote;
