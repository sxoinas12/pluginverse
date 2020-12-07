import React from 'react';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less'

const SuccessMessage = ({ onClick }) => (
  <>
    <Row className={styles.messageContainer}>
      <img className={styles.icon} src={require('@assets/icons/contact-success.svg')} alt="" />
      <div className={styles.text}>Your message arrived safely to our base!</div>
    </Row>
    <Row>
      <button className={styles.button} onClick={onClick}>Go to homepage</button>
    </Row>
  </>
);

export default SuccessMessage;
