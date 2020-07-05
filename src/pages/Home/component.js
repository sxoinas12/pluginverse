import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BundleBanner from '@components/BundleBanner';
import Frame from '@components/Frame';
import SimilarSection from '@components/SimilarSection';
import Newsletter from '@components/Newsletter';
import Dropdown from '@components/Dropdown';

import styles from './styles.module.less';

// query design Tools
const designTools = [
  { key: "Figma", value: 1 },
  { key: "AdobeXD", value: 2 },
  { key: "Sketch", value: 3 }
];
// get categories 


const Home = () => (
  <React.Fragment >
    <Row className={styles.frame}>
      <Col>
        <Frame title={'Find the best fit among hundreds of design tool plugins'} subtitle={''} styling={styles.homeFrame}>
          <Dropdown placeholder={'Choose design tool'} options={designTools} onSelect={(selected) => null} />
          <Dropdown placeholder={'Choose a category'} options={designTools} onSelect={(selected) => null} />
          <img src={require('@assets/images/homeview-ball.svg')} alt="Moon" className={styles.moon} />
        </Frame>
      </Col>
    </Row>
    <Container>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title={'For Design Systems'} subtitle={'Build and maintain a well-developed design system'} extra={'More UX plugins'}/>
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title={'For Design Systems'} subtitle={'Build and maintain a well-developed design system'} extra={'More UX plugins'}/>
        </Col>
      </Row>
      <Row className={styles.bundle}>
        <Col>
          <BundleBanner />
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title={'For Design Systems'} subtitle={'Build and maintain a well-developed design system'} extra={'More UX plugins'}/>
        </Col>
      </Row>
      <Row className={styles.section}>
        <Col>
          <SimilarSection title={'For Design Systems'} subtitle={'Build and maintain a well-developed design system'} extra={'More UX plugins'}/>
        </Col>
      </Row>
    </Container>
    <Row className={styles.frame}>
      <Col>
        <Newsletter />
      </Col>
    </Row>
  </React.Fragment>
);
export default Home;
