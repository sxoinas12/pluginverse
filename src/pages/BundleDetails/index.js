/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';
import List from '@components/List';
import { useQuery } from '@apollo/react-hooks';
import Breadcrumb from '@components/Breadcrumb';
import Badge from '@components/Badge';
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
    <div>
    <Row className={styles.bundleDetailsContainer}>
      <Col xs={12}>
        <Container>
          <div className={styles.breadcrumb}>
            <Breadcrumb theme="dark">
              <Link to="/">
                <div style={{ color: 'white'}}>Home</div>
              </Link>
              <span className={styles.navBarLink}>{bundle.name || 'Test Plugin'}</span>
            </Breadcrumb>
          </div>
          <div className={styles.bundleHeader}>
            <div className={styles.bundleIcon}>
              <img src={(bundle.image && bundle.image.url) ? '/api' + bundle.image.url : require('@assets/icons/bundle.svg')} alt="" />
            </div>
            <Row>
              <Col xs={12}><div className={styles.bundleName}>{bundle.name}</div></Col>
            </Row>
            <Row>
              <Col className={styles.toolContainer}>
                {bundle.tools.map((tool, index) => 
                  <Badge key={index} tool={tool.name} text={`For ${tool.name}`}/>)}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8} lg={6}><div className={styles.bundleDescription}>{bundle.description}</div></Col>
            </Row>
          </div>
        </Container>
      </Col>
    </Row>
    <Row>
      <Col xs={12} className={styles.bundlePlugins}>
        <Container>
          <List data={bundle.plugins} linkPrefix={(c) => `/plugin/${c.id}`} size={4} />
        </Container>
      </Col>
    </Row>
    </div>
  ) : null;
};

BundleDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.any
  })
};

export default withRouter(BundleDetails);
