import React from 'react';

import Navbar from '../../components/NavBar';


import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_DOCS = () => gql`
query{
  categories {
    id,
    name,
    parent {
      id,
      name
    }
  }
}`;
export default () => {
  const { loading, error, data } = useQuery(GET_DOCS());

  if (loading) return 'Loading...';
  if (error) return 'Error...';

  const { categories } = data;
  const megaStructure = {};
  categories.forEach((cat) => {
    if (!cat.parent) {
      megaStructure[cat.name] = {};
    }
  });
  categories.forEach((cat) => {
    if (cat.parent) {
      megaStructure[cat.parent.name][cat.name] = '/category/' + cat.id;
    }
  });

  return (
    <div>
      <Navbar megaStructure={megaStructure} />
    </div>

  );
};
