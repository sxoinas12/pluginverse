import React, { useState } from 'react';
import Breadcrumb from '@components/Breadcrumb';
import { Link, withRouter } from 'react-router-dom';
import BaseCheckbox from '@components/BaseCheckbox';
import { Row, Col, Container } from 'react-grid-system';
import Divider from '@components/Divider';
import BundleCard from '@components/BundleCard';
import ToolFilter from '@components/ToolFilter';
import { useBundlesList } from './hooks/useBundlesList.js';
import styles from './styles.module.less';

const BundlesList = ({ history }) => {
  const { bundles } = useBundlesList();

  const [filters, setFilters] = useState(['sketch', 'adobexd', 'figma']);
  const fString = filters.join();
  return (
    <Container>
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
              <div className={styles.header}>
                Plugin Bundles
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget turpis nisl, a eu quis. Interdum scelerisque sollicitudin donec elementum lorem eu.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={styles.toolsContainer}>
              <ToolFilter onFilter={(f) => setFilters(f)} />
            </Col>
          </Row>
          <Divider />
          <Row className={styles.bundlesContainer}>
            {bundles.filter((bundle) => {
              
              return bundle.tools.length ? bundle.tools.map((t) => t.name.toLowerCase()).reduce((p,c) => p || fString.includes(c), false) : true;
            }).map((bundle, index) => (
              <Col xs={6} className={styles.bundleCard} key={index}>
                <BundleCard bundle={bundle} onClick={() => history.push(`/bundle/${bundle.id}`)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BundlesList);
