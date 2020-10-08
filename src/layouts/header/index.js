import React from 'react';

import usePagingQuery from '@hooks/usePagingQuery';
import GET_ALLCATEGORIES from '@graphql/categories/getAllCategories';

import Navbar from '../../components/NavBar';

export default () => {
  const { loading, data } = usePagingQuery(GET_ALLCATEGORIES, 'categories');
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
      console.log(tempStructure)
      setMegaStructure(tempStructure);
    }
  }, [data]);


  return !loading && (
    <div>
      <Navbar megaStructure={megaStructure} />
    </div>

  );
};
