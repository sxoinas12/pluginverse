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
  for (let i = size - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * max);
    arr[i] = j;
  }
  return arr;
};

const Home = ({ history }) => {
  const [tool, setTool] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [subcategory, setSubCategory] = useState(undefined);

  const bundleQ = useQuery(GET_BUNDLE(1));
  const catQ = usePagingQuery(GET_CATEGORIES, "categories");
  const subcatQ = usePagingQuery(GET_SUBCATEGORIES, "categories");

  if (bundleQ.loading || catQ.loading || subcatQ.loading) {
    return '';
  }

  let categories = catQ.error ? [] : catQ.data.categories;
  categories = categories.map(toOptions);
  let subcategories = subcatQ.error ? [] : subcatQ.data.categories;
  subcategories = category ? subcategories.filter((item) => item.parent.id === category) : subcategories;
  subcategories = subcategories.map(toOptions);
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
                onSelect={selected => setCategory(selected)}
              />
              <Dropdown
                placeholder="Choose a subcategory"
                options={subcategories}
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
      <CategoriesBar />
      <Container>
        {sections.map((item, index) => {
          return (
            <Row className={styles.section} key={index}>
              <Col>
                <SubcategorySection category={item} />
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
      </Container>
      <Row className={styles.frame}>
        <Col>
          <Newsletter />
        </Col>
      </Row>
    </>
  );
};
export default withRouter(Home);
