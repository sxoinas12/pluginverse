import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const BundleBanner = ({ bundle }) => {
  return (
    <Row className={styles.bundleContainer}>
      <Col xs={12}>
        <Row>
          <Col className={styles.toolContainer}>
            <div>
              {bundle.tools.figma && <img src={require('@assets/icons/figma.svg')} alt="Figma" />}
              {bundle.tools.adobe && <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />}
              {bundle.tools.sketch && <img src={require('@assets/icons/sketch.svg')} alt="Sketch" />}
            </div>
            <div className={styles.toolTitle}>
              FOR&nbsp;
              {Object.keys(bundle.tools)[0].toUpperCase()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}><div className={styles.designBundle}>UX Design Bundle</div></Col>
        </Row>
        <Row>
          <Col xs={6} className={styles.actionsContainer}>
            <div className={styles.bundleButton}>
              <a href={`/bundle/${bundle.bundleId}`}>Go to bundle</a>
            </div>
            <div className={styles.viewAll}>
              <a href="/bundle">View all bundle</a>
            </div>
          </Col>
        </Row>
      </Col>
      <div className={styles.bundleIcon}>
        <img src={require('@assets/icons/bundle.svg')} alt="" />
      </div>
    </Row>
  );
};

BundleBanner.propTypes = {
  bundle: PropTypes.shape({
    tools: PropTypes.shape({
      figma: PropTypes.shape({}),
      adobe: PropTypes.shape({}),
      sketch: PropTypes.shape({})
    }),
    bundleId: PropTypes.any
  })
};

BundleBanner.defaultProps = {
  bundle: {
    tools: {
      figma: {}
    },
    bundleId: 1
  }
};

export default BundleBanner;
