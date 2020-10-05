import React from 'react';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const DiscoverCategories = () => (
  <Row>
    <Col xs={12} className={styles.discoverContainer}>
      <Row>
        <Col>
          <div className={styles.discoverText}>OR DISCOVER THE CATEGORIES BELOW</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.discoverIcon}>
            <img src={require('@assets/icons/double-arrow-bottom.svg')} alt="" />
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default DiscoverCategories;
