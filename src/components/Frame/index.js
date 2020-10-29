import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-grid-system';
import styles from './styles.module.less';


const Frame = (props) => {
  const {
    title,
    subtitle,
    height,
    children,
    styling,
  } = props;

  return (
    <Row className={styling} style={{overflow: 'hidden'}}>
      <Col xs={12} className={styles.container} style={{ minHeight: height }}>
        <Container style={{zIndex:2}}>
          <h3 className={styles.frameTitle}>
            {title}
          </h3>
          <p>
            {subtitle}
          </p>
        </Container>
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
  ]),
  styling: PropTypes.string,
};

Frame.defaultProps = {
  title: 'Want to learn about new plugins ahead of the rest?',
  subtitle: 'We will only send you amazing news',
  height: 300,
  children: []
};

export default Frame;
