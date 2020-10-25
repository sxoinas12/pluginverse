import React from 'react';
import Breadcrumb from '@components/Breadcrumb';
import { Link, withRouter } from 'react-router-dom';
import BaseCheckbox from '@components/BaseCheckbox';
import { Row, Col, Container } from 'react-grid-system';
import Divider from '@components/Divider';
import BundleCard from '@components/BundleCard';
import { useBundlesList } from './hooks/useBundlesList.js';
import styles from './styles.module.less';

const BundlesList = () => {
  const { bundles } = useBundlesList();
  return (
    <Container style={{ maxWidth: '1440px' }}>
      <Row className={styles.bundlesListContainer}>
        <Col xs={12}>
          <Row>
            <Col xs={12} md={6}>
              <Breadcrumb>
                <Link to="/">Home</Link>
                <span>Bundles</span>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={6}>
                  <div className={styles.header}>
                    Plugin Bundles
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget turpis nisl, a eu quis. Interdum scelerisque sollicitudin donec elementum lorem eu.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className={styles.toolsContainer}>
                  <div className={styles.toolWrapper}>
                    <BaseCheckbox />
                    <div className={styles.toolHeader}>Figma</div>
                  </div>
                  <div className={styles.toolWrapper}>
                    <BaseCheckbox />
                    <div className={styles.toolHeader}>Sketch</div>
                  </div>
                  <div className={styles.toolWrapper}>
                    <BaseCheckbox />
                    <div className={styles.toolHeader}>Adobe</div>
                  </div>
                </Col>
              </Row>
              <Divider />
              <Row className={styles.bundlesContainer}>
                {bundles.map((bundle, index) => (
                  <React.Fragment key={index}>
                    <Col xs={5} className={styles.bundleCard}>
                      <BundleCard bundle={bundle} />
                    </Col>
                  </React.Fragment>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BundlesList);
