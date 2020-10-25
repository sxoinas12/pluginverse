import React from 'react';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SimilarSection from '@components/SimilarSection';
import styles from './styles.module.less';

const catQuery = (id) => gql`{
  category(id:${id}){
    id,
    name,
    description,
    plugins{
      id,
      name,
      description,
      stars,
      tools {
        name,
        id,
        }
    }
  }
}`;

const SubcategorySection = ({ category }) => {
  const { loading, error, data } = useQuery(catQuery(category || 1));


  if (loading) return '';
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (data.length === 0) return '';
  console.log('sdadadadadasdas', data.category)
  return (
    <div className={styles.section}>
      <SimilarSection
        title={`For ${data.category.name}`}
        subtitle={data.category.description}
        data={data.category.plugins}
      />
    </div>
  );
};


SubcategorySection.propTypes = {
  category: PropTypes.number
};

SubcategorySection.defaultProps = {
  category: 1
};

export default SubcategorySection;
