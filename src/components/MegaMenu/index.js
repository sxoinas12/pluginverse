import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const MegaMenu = (props) => {
  const {
    title,
    structure
  } = props;

  const keys = Object.keys(structure);
  const columns = 12 / keys.length;
  return (
    <Row className={styles.menuContainer}>
      <Col>
        <Container>
        <div className={styles.fixContainer}>
          <Row>
            <Col>
              <div className={styles.title}>{title}</div>
            </Col>
          </Row>
          <Row>
            {keys.map((key, index) => {
              const titles = Object.keys(structure[key]);
              return (
                <Col xs={columns} className={styles.menuBlock} key={index}>
                  <div className={styles.subtitle}>{key}</div>
                  {titles.map((cat, index) => <a key={index} className={styles.category} href={structure[key][cat]}>{cat}</a>)}
                </Col>
              );
            })}
          </Row>
        </div>
        </Container>
      </Col>
    </Row>
  );
};

MegaMenu.propTypes = {
  title: PropTypes.string,
  structure: PropTypes.shape({})
};

MegaMenu.defaultProps = {
  title: "ALL PLUGIN CATEGORIES",
  structure: {
    'Category 1': {
      'Test 1': 'link1',
      'Test 2': 'link2',
      'Test 3': 'link3',
      'Test 4': 'link4'
    },
    'Category 2': {
      'Alpha 1': 'link1',
      'Alpha 2': 'link2',
      'Alpha 3': 'link3',
      'Alpha 4': 'link4'
    },
    'Category 3': {
      'Beta 1': 'link1',
      'Beta 2': 'link2',
      'Beta 3': 'link3',
      'Beta 4': 'link4'
    }
  }
};

export default MegaMenu;
