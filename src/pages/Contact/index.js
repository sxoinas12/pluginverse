import React, { useState } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import BaseLoader from '@components/BaseLoader';
import ContactForm from '@components/ContactForm';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SuccessMessage from './SuccessMessage';
import styles from './styles.module.less';

const GET_BUNDLES = () => gql`
query{
  bundles {
    id
  }
 }
 `;

const GET_PLUGINS = () => gql`
 query{
  plugins {
    id
  }
 }
 `;

export default withRouter(({ history }) => {
  const categoriesCount = 46;

  const [sent, setSent] = useState(false);

  const bundles = useQuery(GET_BUNDLES());
  const plugins = useQuery(GET_PLUGINS());

  if (plugins && bundles && bundles.loading && plugins.loading) return <BaseLoader />;
  return (
    <div className={styles.fluidContactContainer}>
      <Container>
        <Row className={styles.contactPageContainer}>
          <Col>
            <Row>
              <Col lg={6} className={styles.leftContainer}>
                <Row>
                  <Col className={styles.header}>{sent ? 'Thank you!' : 'Hello there!'}</Col>
                </Row>
                <Row>
                  <Col className={styles.footnote}>{sent ? 'Hope to hear from you again.' : 'We would love to hear more from you'}</Col>
                </Row>
                {sent ? <SuccessMessage onClick={() => history.push('/')} /> : <ContactForm onSubmited={val => setSent(val)} />}
              </Col>
              <Col lg={6} className={styles.rightContainer}>
                <Row>
                  <Col className={styles.header}>{plugins.data && plugins.data.plugins.length}</Col>
                </Row>
                <Row className={styles.description}>
                  <Col>Unique Design Plugins</Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.linkContainer}>
                      <div className={styles.text}>Discover them all</div>
                      <img className={styles.imageStyle} src={require('@assets/icons/arrow-go.svg')} alt="->" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className={styles.header}>{categoriesCount}</Col>
                </Row>
                <Row>
                  <Col className={styles.description}>Plugin Categories</Col>
                </Row>
                <Row>
                  <Col className={styles.header}>{bundles.data && bundles.data.bundles.length}</Col>
                </Row>
                <Row>
                  <Col className={styles.description}>Curated Bundles</Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.linkContainer}>
                      <div role="button" className={styles.text} onClick={() => history.push('/bundles')}>
                        Your next plugin stack
                      </div>
                      <img className={styles.imageStyle} src={require('@assets/icons/arrow-go.svg')} alt="->" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
});
