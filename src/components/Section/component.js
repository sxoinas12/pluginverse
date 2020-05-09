import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const Section = (props) => {
  const {
    title,
    subtitle,
    extra,
    children,
    style
  } = props;

  return (
    <Row className={styles.rowContainer} style={{ ...style }}>
      <Col xs={12} className={styles.mainColumn}>
        <Row>
          <Col xs={12} className={styles.titlePart}>
            <h3>
              {title}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} className={styles.subtitle}>
            <p>
              {subtitle}
            </p>
          </Col>
          <Col xs={12} md={5} className={styles.rightPart}>
            {extra}
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};


Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  extra: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.shape({})
};

Section.defaultProps = {
  title: 'For design systems',
  subtitle: 'Build and maintain a well-developed design system',
  extra: 'More extras >',
  children: []
};


export default Section;
