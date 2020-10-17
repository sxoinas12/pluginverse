import React from 'react';
import Breadcrumb from '@components/Breadcrumb';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const BundlesList = () => {
  return (
    <Row>
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
              <div>Plugin Bundles</div>
            </Row>
            <Row>
              <div>Description</div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(BundlesList);
