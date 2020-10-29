import React from 'react';
import Divider from '@components/Divider';
import BaseCheckbox from '@components/BaseCheckbox';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import BaseLoader from '@components/BaseLoader';
import { Row, Col } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import List from '@components/List';

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
export default withRouter((props) => {
  const id = parseInt(props.match.params.id || '1');
  const { loading, error, data } = useQuery(GET_DOCS(id));

  if (loading) return <BaseLoader />;

  const { category } = data;

  category.plugins = category.plugins.map((i) => {
    i.author = i.author && i.author.name;
    i.header = i.name;
    return i;
  });
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
              <BaseCheckbox />
              <div className={styles.toolHeader}>Figma</div>
            </div>
            <div className={styles.toolWrapper}>
              <BaseCheckbox />
              <div className={styles.toolHeader}>Sketch</div>
            </div>
            <div className={styles.toolWrapper}>
              <BaseCheckbox />
              <div className={styles.toolHeader}>Adobe</div>
            </div>
          </Col>
        </Row>
        <Divider className={styles.dividerStyle} />
        <List data={category.plugins} linkPrefix={(c) => `/plugin/${c.id}`} size={4} />
      </Col>
    </Row>
  );
});
