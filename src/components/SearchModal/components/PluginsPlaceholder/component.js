import React from 'react';
import {
  Row,
  Col
} from 'react-grid-system';
import styles from './styles.module.less';

const PluginsPlaceholder = () => (
  <Row>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
    <Col xs={3}>
      <div className={styles.pluginPlaceholder} />
    </Col>
  </Row>
);

export default PluginsPlaceholder;
