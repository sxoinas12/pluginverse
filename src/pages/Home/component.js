import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BundleBanner from '@components/BundleBanner';
import Frame from '@components/Frame';
import SimilarSection from '@components/SimilarSection';
import Newsletter from '@components/Newsletter';

import styles from './styles.module.less';


const Home = () => (
  <>
    <Row className={styles.frame}>
      <Col>
        <Frame title="Find the best fit among hundreds of design tool plugins" subtitle="">
          dropdowns
        </Frame>
      </Col>
    </Row>
    <Container>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title="For Design Systems" subtitle="Build and maintain a well-developed design system" extra="More UX plugins" />
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title="For Design Systems" subtitle="Build and maintain a well-developed design system" extra="More UX plugins" />
        </Col>
      </Row>
      <Row className={styles.bundle}>
        <Col>
          <BundleBanner />
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title="For Design Systems" subtitle="Build and maintain a well-developed design system" extra="More UX plugins" />
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title="For Design Systems" subtitle="Build and maintain a well-developed design system" extra="More UX plugins" />
        </Col>
      </Row>
    </Container>
    <Row className={styles.frame}>
      <Col>
        <Newsletter />
      </Col>
    </Row>
  </>
);
export default Home;
