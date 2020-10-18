import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const BundleCard = ({ bundle }) => {
  return (
    <Row>
      <Col xs={12} className={styles.bundleCardContainer}>
        <Row>
          <Col xs={8}>
            <div className={styles.bundleName}>{bundle.name}</div>
          </Col>
        </Row>
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
          </Col>
        </Row>
        <div className={styles.bundleIcon}>
          <img src={require('@assets/icons/bundle.svg')} alt="" />
        </div>
      </Col>
    </Row>
  );
};

BundleCard.propTypes = {
  bundle: PropTypes.shape({
    name: PropTypes.string
  })
};

export default BundleCard;
