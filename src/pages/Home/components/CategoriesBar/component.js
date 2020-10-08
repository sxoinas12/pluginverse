import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const CategoriesBar = ({ categories }) => {
  return (
    <Row>
      <Col className={styles.barContainer}>
        {categories.map((category, index) => {
          return (
            <div className={styles.barItem} key={index}>
              <span>{category.name}</span>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

CategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
};

CategoriesBar.defaultProps = {
  categories: [
    {
      name: 'UX'
    },
    {
      name: 'UI'
    },
    {
      name: 'Collaboration'
    },
    {
      name: 'Utility'
    },
    {
      name: 'Assets'
    }
  ]
};

export default CategoriesBar;
