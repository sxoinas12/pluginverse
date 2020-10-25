import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import BundleBanner from '@components/BundleBanner';
import Frame from '@components/Frame';
import SubcategorySection from '@components/SubcategorySection';
import Newsletter from '@components/Newsletter';
import Dropdown from '@components/Dropdown';
import { useQuery } from '@apollo/react-hooks';
import usePagingQuery from '@hooks/usePagingQuery';

import GET_BUNDLE from '@graphql/bundles/getBundle';
import GET_CATEGORIES from '@graphql/categories/getCategories';
import GET_SUBCATEGORIES from '@graphql/categories/getCategoriesNested';
import CategoriesBar from './components/CategoriesBar';
import DiscoverCategories from './components/DiscoverCategories';
import styles from './styles.module.less';

// query design Tools
const designTools = [
  { key: 'Figma', value: 1 },
  { key: 'AdobeXD', value: 2 },
  { key: 'Sketch', value: 3 }
];
const toOptions = (item) => {
  return {
    key: item.name,
    value: item.id
  };
};

const findRandom = (size, max) => {
  const arr = [];
  let j;
  for (let i = 0; i < size && i < max; i++) {
    do {
      j = Math.floor(Math.random() * max);
    } while (arr.includes(j));
    arr[i] = j;
  }
  return arr;
};

const Home = ({ history, dispatch }) => {
  const [tool, setTool] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [subcategory, setSubCategory] = useState(undefined);

  const bundleQ = useQuery(GET_BUNDLE(2));
  const catQ = usePagingQuery(GET_CATEGORIES, 'categories');
  const subcatQ = usePagingQuery(GET_SUBCATEGORIES, 'categories');

  let categories = catQ.error ? [] : (catQ.data && catQ.data.categories);
  categories = (categories || []).map(toOptions);
  let subcategories = subcatQ.error ? [] : (subcatQ.data && subcatQ.data.categories) || [];
  subcategories = category ? subcategories.filter((item) => item.parent.id === category) : subcategories;
  subcategories = (subcategories || []).map(toOptions);
  const sections = findRandom(5, subcategories.length);

  return (
    <>
      <Row className={styles.frame}>
        <Col>
          <Frame title="Find the best fit among hundreds of design tool plugins" subtitle="" styling={styles.homeFrame}>
            <div className={styles.categorySelect}>
              <Dropdown
                placeholder="Choose design tool"
                options={designTools}
                onSelect={selected => setTool(selected)}
              />
              <Dropdown
                placeholder="Choose a category"
                options={categories}
                value={category}
                onSelect={selected => setCategory(selected)}
              />
              <Dropdown
                placeholder="Choose a subcategory"
                options={subcategories}
                value={subcategory}
                onSelect={(selected) => setSubCategory(selected)}
              />
              <button type="button" className={styles.goButton} onClick={() => history.push(`/category/${subcategory}`)}>
                Go
              </button>
            </div>
            <DiscoverCategories />
            <img src={require('@assets/images/circle_1.svg')} alt="Moon" className={styles.moon} />
            <img src={require('@assets/images/circle_2.svg')} alt="Earth" className={styles.earth} />
          </Frame>
        </Col>
      </Row>
      <CategoriesBar onSelect={(c) => setCategory(c)} categories={categories} selected={category} />
      <Container style={{ maxWidth: '1440px' }}>
        {(sections || []).slice(0, 1).map((item, index) => {
          return (
            <Row className={styles.section} key={index}>
              <Col>
                <SubcategorySection category={subcategories[item] && subcategories[item].value} />
              </Col>
            </Row>
          );
        })}
        <Row className={styles.bundle}>
          <Col>
            {
              bundleQ.data && bundleQ.data.bundle ? <BundleBanner bundle={bundleQ.data.bundle} /> : null
            }
          </Col>
        </Row>
        {(sections || []).slice(1, 3).map((item, index) => {
          return (
            <Row className={styles.section} key={index}>
              <Col>
                <SubcategorySection category={subcategories[item] && subcategories[item].value} />
              </Col>
            </Row>
          );
        })}
      </Container>
      <Row className={styles.newsletter}>
        <Col>
          <Newsletter />
        </Col>
      </Row>
      <Container style={{ maxWidth: '1440px' }}>
        {(sections || []).slice(3).map((item, index) => {
          return (
            <Row className={styles.section} key={index}>
              <Col>
                <SubcategorySection category={subcategories[item] && subcategories[item].value} />
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};
export default withRouter(Home);
