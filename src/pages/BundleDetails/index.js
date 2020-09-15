import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';
import BundlePlugin from '@components/BundlePlugin';
import styles from './styles.module.less';

const BundleDetails = ({ params }) => {
  const mockArray = [1, 1, 1, 1];
  useEffect(() => {
    if (params) {
      // TODO fetch full bunlde here using bundle id
    }
  }, [params]);

  const bundle = useMemo(() => {
    return {
      tools: {
        figma: {}
      }
    };
  }, []);
  return (
    <Container>
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
          <Row>
            <Col xs={12}>
              {mockArray.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <BundlePlugin />
                  </React.Fragment>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

BundleDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.any
  })
};

export default BundleDetails;
