import React from 'react';


import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Navbar from '../../components/NavBar';

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
  const { loading, data } = useQuery(GET_DOCS());
  const [megaStructure, setMegaStructure] = React.useState({});
  React.useEffect(() => {
    const tempStructure = {};
    if (data && data.categories) {
      (data.categories).forEach((cat) => {
        if (!cat.parent) {
          tempStructure[cat.name] = {};
        }
      });
      (data.categories).forEach((cat) => {
        if (cat.parent) {
          tempStructure[cat.parent.name][cat.name] = `/category/${cat.id}`;
        }
      });
      setMegaStructure(tempStructure);
    }
  }, [data]);


  return !loading && (
    <div>
      <Navbar megaStructure={megaStructure} />
    </div>

  );
};
