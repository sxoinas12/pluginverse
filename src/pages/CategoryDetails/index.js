import React, { useEffect, useState } from 'react';
import Divider from '@components/Divider';
import BaseCheckbox from '@components/BaseCheckbox';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import BaseLoader from '@components/BaseLoader';
import { Row, Col } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import List from '@components/List';
import { useFilters } from './useFilters.hook';
import styles from './styles.module.less';

const GET_DOCS = (id) => gql`
query{
  category (id:${id}){
    id,
    name,
    description,
    plugins{
      id,
      name,
      description,
      short_description,      
      icon: icon{
        url
      },
      tools {
        id,
        name,
      },
      stars,
      author {
        name,
        icon {
          url
        }
      },
    }
  }
}`;
export default withRouter(({ state, ...props }) => {
  const id = parseInt(props.match.params.id || 1);
  const [category, setCategory] = useState({})
  const { loading, data } = useQuery(GET_DOCS(id));

  useEffect(() => {
    if (data) {
      setCategory(data.category)
    }
  }, [data])
  const {
    isLoading, filters, handleCheck, componentPlugins
  } = useFilters({
    designTools: state.designTools,
    subCategoryData: state.subCategoryData,
    category,
  });

  if (loading) return <BaseLoader />;
  return (
    <Row>
      <Col className={styles.container}>
        <Breadcrumb>
          <Link to="/">Home</Link>
          <span>{category.name || 'Test Category'}</span>
        </Breadcrumb>
        <Row>
          <Col xs={12}>
            <div className={styles.titleStyle}>{category.name}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={styles.categoryPluginCount}>{category.plugins && (`${category.plugins.length}`)}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={styles.description}>{category.description || 'No category description has been found or exist'}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className={styles.toolsContainer}>
            <div className={styles.toolWrapper}>
              <BaseCheckbox
                isSelected={filters.Figma ? filters.Figma.isSelected : false}
                handleClick={handleCheck}
                itemKey={filters.Figma}
              />
              <div className={styles.toolHeader}>Figma</div>
            </div>
            <div className={styles.toolWrapper}>
              <BaseCheckbox
                isSelected={filters.Sketch ? filters.Sketch.isSelected : false}
                handleClick={handleCheck}
                itemKey={filters.Sketch}
              />
              <div className={styles.toolHeader}>Sketch</div>
            </div>
            <div className={styles.toolWrapper}>
              <BaseCheckbox
                isSelected={filters.AdobeXD ? filters.AdobeXD.isSelected : false}
                handleClick={handleCheck}
                itemKey={filters.AdobeXD}
              />
              <div className={styles.toolHeader}>AdobeXd</div>
            </div>
          </Col>
        </Row>
        <Divider className={styles.dividerStyle} />
        { isLoading ? <BaseLoader /> : null}
        <List data={componentPlugins} linkPrefix={(c) => `/plugin/${c.id}`} size={4} />
      </Col>
    </Row>
  );
});
