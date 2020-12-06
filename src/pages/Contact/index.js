import React from 'react';
import { Row, Col, Container } from 'react-grid-system';
import BaseLoader from '@components/BaseLoader';
import BaseInput from '@components/BaseInput';
import BaseTextArea from '@components/BaseTextArea';
import styles from './styles.module.less';

export default () => {
  const navbar = document.getElementById('navBarContainer');
  const pluginsCount = 1794;
  const categoriesCount = 46;
  const bundleCount = 16;
  const loading = false;

  if (loading) return <BaseLoader />;

  return (
    <>
      <Row className={styles.contactPageContainer}>
        <Col>
          <Row>
            <Col lg={6} className={styles.leftContainer}>
              <Row>
                <Col className={styles.header}>Hello there!</Col>
              </Row>
              <Row>
                <Col className={styles.footnote}>We would love to hear more from you</Col>
              </Row>
              <Row>
                <Col className={styles.inputContainer}>
                  <BaseInput isValid placeholder="example@gmail.com" />
                </Col>
              </Row>
              <Row>
                <Col className={styles.textContainer}>
                  <BaseTextArea placeholder="Give us your feedback" />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className={styles.rightContainer}>
              <Row>
                <Col className={styles.header}>{pluginsCount}</Col>
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
                <Col className={styles.header}>{bundleCount}</Col>
              </Row>
              <Row>
                <Col className={styles.description}>Curated Bundles</Col>
              </Row>
              <Row>
                <Col>
                  <div className={styles.linkContainer}>
                    <div className={styles.text}>Your next plugin stack</div>
                    <img className={styles.imageStyle} src={require('@assets/icons/arrow-go.svg')} alt="->" />
                  </div>
                </Col>
              </Row>
              <div className={styles.circleContainer}>
                <img src={require('@assets/icons/circle.svg')} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
