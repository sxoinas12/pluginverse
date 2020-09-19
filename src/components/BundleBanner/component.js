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
              {bundle.tools.map((tool, index) => {
                switch (tool.name) {
                  case 'Figma':
                    return <img key={index} src={require('@assets/icons/figma.svg')} alt="Figma" />
                  case 'Adobe':
                    return <img key={index} src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />
                  case 'Sketch':
                    return <img key={index} src={require('@assets/icons/sketch.svg')} alt="Sketch" />
                  default:
                    return '';
                }
              })}
            </div>
            <div className={styles.toolTitle}>
              FOR&nbsp;
              {bundle.tools[0].name.toUpperCase()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}><div className={styles.designBundle}>{bundle.name}</div></Col>
        </Row>
        <Row>
          <Col xs={6} className={styles.actionsContainer}>
            <div className={styles.bundleButton}>
              <a href={`/bundle/${bundle.id}`}>Go to bundle</a>
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
    tools: PropTypes.array,
    id: PropTypes.any
  }),
  name: PropTypes.string,
};

export default BundleBanner;
