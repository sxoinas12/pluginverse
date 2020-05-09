import React from 'react';

import { Row, Col } from 'react-grid-system';


import Section from '../../components/Section';
import Newsletter from '../../components/Newsletter';

import List from '../../components/List';
import Breadcrumb from '../../components/Breadcrumb';
import NavBar from '../../components/NavBar';


const Test = () => (
  <Row>
  	<Col>
  	  <NavBar />
	  <Breadcrumb />
	  <Section extra={<h3 style={{margin:0}}>More from nik</h3>}>
	  	<List />
	  </Section>
	  <Newsletter />
	  <List />

	</Col>
  </Row>
);
export default Test;
