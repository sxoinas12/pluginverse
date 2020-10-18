import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import classNames from 'classnames';
import styles from './styles.module.less';

const Divider = ({ className }) => (
  <Row>
    <Col xs={12} className={classNames(className, styles.divider)} />
  </Row>
);

Divider.propTypes = {
  className: PropTypes.string
};

Divider.defaultProps = {
  className: ''
};

export default Divider;
