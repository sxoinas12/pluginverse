import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';
import styles from './styles.module.less';

const BundleBanner = ({ bundle }) => {
  return (
    <Container className={styles.bundleContainer}>
      <div className={styles.bundleIcon}>
        <img src={ (bundle.image && bundle.image.url) ? global.API_URL + bundle.image.url : require('@assets/icons/bundle.svg')} alt="" />
      </div>
      <Row>
        <Col xs={12} className={styles.toolContainer}>
          <div>
            {bundle.tools.map((tool, index) => {
              switch (tool.name) {
                case 'Figma':
                  return <img key={index} src={require('@assets/icons/figma.svg')} alt="Figma" />;
                case 'Adobe':
                  return <img key={index} src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />;
                case 'Sketch':
                  return <img key={index} src={require('@assets/icons/sketch.svg')} alt="Sketch" />;
                default:
                  return '';
              }
            })}
          </div>
          <div className={styles.toolTitle}>
            FOR&nbsp;
            {bundle.tools.map((tool,index) => tool.name.toUpperCase()).join(' - ')}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className={styles.designBundle}>
            {bundle && bundle.name}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={styles.actionsContainer}>
          <div className={styles.bundleButton}>
            <a href={`/bundle/${bundle.id}`}>Go to bundle</a>
          </div>
          <div className={styles.viewAll}>
            <a href="/bundles">View all bundle</a>
          </div>
        </Col>
      </Row>
    </Container>

  );
};

BundleBanner.propTypes = {
  bundle: PropTypes.shape({
    tools: PropTypes.array,
    id: PropTypes.any
  }),
  name: PropTypes.string
};

export default BundleBanner;
