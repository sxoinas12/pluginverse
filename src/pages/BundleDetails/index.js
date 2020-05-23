import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import HorizontalCard from '../../components/HorizontalCard';
import HorizontalList from '../../components/HorizontalList';
import styles from './styles.module.less';

const BundleDetails = ({ match }) => {
  useEffect(() => {
    if (match.params.id) { // fetch
    }
  }, [match.params.id]);

  const bundle = useMemo(() => {
    return {
      tools: {
        figma: {}
      }
    };
  }, []);
  return (
    <Row className={styles.bundleDetailsContainer}>
      <Col xs={12}>
        <Row className={styles.bundleHeader}>
          <Col xs={12}>
            <Row>
              <Col xs={12}><div className={styles.designBundle}>UX Design Bundle</div></Col>
            </Row>
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
          </Col>
          <div className={styles.bundleIcon}>
            <img src={require('@assets/icons/bundle.svg')} alt="" />
          </div>
        </Row>
        <HorizontalList base={HorizontalCard} />
      </Col>
    </Row>
  );
};

BundleDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any
    })
  })
};

export default BundleDetails;
