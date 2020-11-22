import React from 'react';
import {
  Col,
  Row
} from 'react-grid-system';
import styles from './styles.module.less';

const CategoryData = ({ categories }) => (categories
  ? (
    <Row>
      {(categories || []).map((category, index) => category && (
      <Col xs={3} key={index}>
        <div className={styles.categoryContainer}>
          <div className={styles.parent}>{category.parent && category.parent.name}</div>
          <div className={styles.title}>{category && category.name}</div>
        </div>
      </Col>
      ))}
    </Row>
  )
  : null);
export default CategoryData;
