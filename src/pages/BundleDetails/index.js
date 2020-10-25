/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';
import BundlePlugin from '@components/BundlePlugin';
import { useQuery } from '@apollo/react-hooks';
import Breadcrumb from '@components/Breadcrumb';

import { Link, withRouter } from 'react-router-dom';
import GET_BUNDLE from '../../graphql/bundles/getBundle';
import styles from './styles.module.less';

const BundleDetails = ({ match }) => {
  const [bundle, setBundle] = useState(null);
  const { data } = useQuery(GET_BUNDLE(match.params.id));
  useEffect(() => {
    if (data) {
      setBundle(data.bundle);
    }
  }, [data]);

  return bundle ? (
    <Row className={styles.bundleDetailsContainer}>
      <Col xs={12}>
        <Row className={styles.bundleHeader}>
          <Col xs={12}>
            <Container style={{ maxWidth: '1440px' }}>
              <Row>
                <Col xs={12} md={6}>
                  <Breadcrumb theme="dark">
                    <Link to="/">
                      <div style={{ color: 'white'}}>Home</div>
                    </Link>
                    <span className={styles.navBarLink}>{bundle.name || 'Test Plugin'}</span>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col xs={12}><div className={styles.designBundle}>{bundle.name}</div></Col>
              </Row>
              <Row>
                <Col className={styles.toolContainer}>
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
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <div className={styles.bundleIcon}>
            <img src={require('@assets/icons/bundle.svg')} alt="" />
          </div>
        </Row>
        <Container style={{ maxWidth: '1440px'}}>
          <Row>
            <Col xs={12}>
              {bundle.plugins.map((plugin, index) => {
                return (
                  <React.Fragment key={index}>
                    <BundlePlugin {...plugin} />
                  </React.Fragment>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  ) : null;
};

BundleDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.any
  })
};

export default withRouter(BundleDetails);
