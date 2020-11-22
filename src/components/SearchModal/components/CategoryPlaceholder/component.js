import React from 'react';
import {
  Row,
  Col
} from 'react-grid-system';
import styles from './styles.module.less';

const CategoryPlaceholder = () => (
  <Row>
    <Col xs={3}>
      <div className={styles.categoryPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.categoryPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.categoryPlaceholder} />
    </Col>
  </Row>
);

export default CategoryPlaceholder;
