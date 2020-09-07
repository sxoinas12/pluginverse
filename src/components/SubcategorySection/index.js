import React from 'react';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SimilarSection from '@components/SimilarSection';
import List from '@components/List';

import styles from './styles.module.less';

const catQuery = (id) => gql`{
  category(id:${id}){
    id,
    name,
    description,
    plugins{
      id,
      name,
      tools{
        name,
        id,
        icon{
          url
        }
      }
    }
  }
}`;

const SubcategorySection = ({ category }) => {
  const { loading, error, data } = useQuery(catQuery(category || 1));
  if (loading) return '1';
  if (error) return <p>{JSON.stringify(error)}</p>;
  return <div className={styles.section}>
    <SimilarSection 
      title={'For ' + data.category.name}
      subtitle={data.category.description}
      data={data.category.plugins}
    />
  </div>
};


SubcategorySection.propTypes = {
  category: PropTypes.number
};

SubcategorySection.defaultProps = {
  category: 1
}

export default SubcategorySection;
