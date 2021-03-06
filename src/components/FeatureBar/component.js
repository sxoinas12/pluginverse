import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-grid-system';

import styles from './styles.module.less';

const FeatureBar = ({ plugin }) => 
{
  return (
    <Row className={styles.container}>
      <Col xs={6} md={3}>
        <span>Pricing</span>
        <p>{plugin.pricing}</p>
      </Col>
      <Col xs={6} md={3}>
        <span>Status</span>
        <p className={styles.success}>{plugin.status}</p>
      </Col>
      <Col xs={6} md={3}>
        <span>Downloads</span>
        <p>
          {plugin.downloads > 1000 ? (plugin.downloads / 1000 + 'k') : plugin.downloads}
        </p>
      </Col>
      <Col xs={6} md={3}>
        <span>Trending</span>
        <p>
          {plugin.trending < 0 ? '-' : '+'}
          {plugin.trending * 100}
          %
        </p>
      </Col>
    </Row>
  );
};


FeatureBar.propTypes = {
  plugin: PropTypes.shape({
    pricing: PropTypes.string,
    status: PropTypes.string,
    trending: PropTypes.reals,
    downloads: PropTypes.number
  })
};

FeatureBar.defaultProps = {
  plugin: {
    downloads: 10000,
    status: 'Stable',
    pricing: 'Freemium',
    trending: 0.18
  }
};

export default FeatureBar;
