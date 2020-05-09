import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';


const Frame = (props) => {
  const {
    title,
    subtitle,
    height,
    children
  } = props;

  return (
    <Row>
      <Col xs={12} className={styles.container} style={{ minHeight: height }}>
        <h3>
          {title}
        </h3>
        <p>
          {subtitle}
        </p>
        <div className={styles.content}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

Frame.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Frame.defaultProps = {
  title: 'Want to learn about new plugins ahead of the rest?',
  subtitle: 'We will only send you amazing news',
  height: 300,
  children: []
};

export default Frame;
