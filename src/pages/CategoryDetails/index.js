import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Row, Col } from 'react-grid-system';

import { Link, withRouter } from 'react-router-dom';

import Breadcrumb from '@components/Breadcrumb';
import Frame from '@components/Frame';
import List from '@components/List';

import styles from './styles.module.less';

const GET_DOCS = (id) => gql`
query{
  category (id:${id}){
    id,
    name,
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

  if (loading) return "Loading...";

  const { category } = data;

  category.plugins = category.plugins.map((i) => {
    i.author = i.author.name;
    i.header = i.name;
    return i;
  });
  return (
    <Row>
      <Col>
        <div className={styles.container}>
          <Breadcrumb>
            <Link to="/">Home</Link>
            <span>{category.name || "Test Category"}</span>
          </Breadcrumb>
          <Frame title={category.name} subtitle={category.plugins && (category.plugins.length+'')} height={250} styling={styles.titleStyle}/>
          <List data={category.plugins} linkPrefix={'/plugin'}/>
        </div>
      </Col>
    </Row>
  );
});
