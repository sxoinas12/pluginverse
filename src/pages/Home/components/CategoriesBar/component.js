import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import classNames from 'classnames';
import styles from './styles.module.less';

const CategoriesBar = ({ categories, onSelect, selected }) => {
  return (
    <Row>
      <Col className={styles.barContainer}>
        {categories.map((category, index) => {
          return (
            <div
              role="button"
              tabIndex={0}
              className={selected === category.value ? classNames(styles.selectedItem, styles.barItem) : styles.barItem}
              key={index}
              onClick={(c) => onSelect && onSelect(category.value)}
              onKeyDown={() => null}
            >
              <span>{category.key}</span>
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
      key: PropTypes.string,
      value: PropTypes.string
    })
  ),
  selected: PropTypes.string,
  onSelect: PropTypes.func
};

CategoriesBar.defaultProps = {
  categories: [
    {
      key: 'Featured'
    },
    {
      key: 'UX'
    },
    {
      key: 'UI'
    },
    {
      key: 'Collaboration'
    },
    {
      key: 'Utility'
    },
    {
      key: 'Assets'
    }
  ]
};

export default CategoriesBar;
