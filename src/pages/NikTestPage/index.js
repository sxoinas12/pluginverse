import React from 'react';

import { Container, Row, Col } from 'react-grid-system';


import Section from '../../components/Section';
import Newsletter from '../../components/Newsletter';

import List from '../../components/List';
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar';
import BundleBanner from '../../components/BundleBanner';

const Test = () => (
  <Container>
    <Row>
      <Col>
        <NavBar />
        <Breadcrumb />
        <Section extra={<h3 style={{ margin: 0 }}>More from nik</h3>}>
          <List />
        </Section>
        <BundleBanner />
        <Newsletter />
        <List />
      </Col>
    </Row>
  </Container>
);
export default Test;
