import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import BundleBanner from '@components/BundleBanner';
import Frame from '@components/Frame';
import Filters from '@components/Filters';
import SimilarSection from '@components/SimilarSection';
import SubcategorySection from '@components/SubcategorySection';
import Newsletter from '@components/Newsletter';
import Dropdown from '@components/Dropdown';
import { useQuery } from '@apollo/react-hooks';
import GET_BUNDLE from '../../graphql/bundles/getBundle';
import styles from './styles.module.less';

// query design Tools
const designTools = [
  { key: 'Figma', value: 1 },
  { key: 'AdobeXD', value: 2 },
  { key: 'Sketch', value: 3 }
];
// get categories
const categories = [
  { key: 'User Experience', value: 1 },
  { key: 'User Interface', value: 2 },
  { key: 'Assets', value: 3 },
  { key: 'Collaboration', value: 4 },
  { key: 'Utility', value: 5 }
];


const Home = () => {
  const { data } = useQuery(GET_BUNDLE(1));
  return (
    <>
      <Row className={styles.frame}>
        <Col>
          <Frame title="Find the best fit among hundreds of design tool plugins" subtitle="" styling={styles.homeFrame}>
            <div className={styles.categorySelect}>
              <Dropdown placeholder="Choose design tool" options={designTools} onSelect={selected => null} />
              <Dropdown placeholder="Choose a category" options={categories} onSelect={selected => null} />
              <a href="" className={styles.goButton}>Go</a>
            </div>
            <img src={require('@assets/images/homeview-ball.svg')} alt="Moon" className={styles.moon} />
          </Frame>
        </Col>
      </Row>
      <Row className={styles.filters}>
        <Col>
          <Filters onSelect={(filter) => console.log(filter)} />
        </Col>
      </Row>
      <Container>
        <Row className={styles.section}>
          <Col>
            <SubcategorySection category={10} />
          </Col>
        </Row>
        <Row className={styles.section}>
          <Col>
            <SimilarSection
              title="For Design Systems"
              subtitle="Build and maintain a well-developed design system"
              extra="More UX plugins"
            />
          </Col>
        </Row>
        <Row className={styles.bundle}>
          <Col>
            {
              data && data.bundles ? <BundleBanner bundle={data.bundles[0]} /> : null
            }
          </Col>
        </Row>
        <Row className={styles.section}>
          <Col>
            <SimilarSection
              title="For Design Systems"
              subtitle="Build and maintain a well-developed design system"
              extra="More UX plugins"
            />
          </Col>
        </Row>
        <Row className={styles.section}>
          <Col>
            <SimilarSection
              title="For Design Systems"
              subtitle="Build and maintain a well-developed design system"
              extra="More UX plugins"
            />
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
};
export default Home;
