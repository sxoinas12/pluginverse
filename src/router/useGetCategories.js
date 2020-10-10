import React from 'react';
import usePagingQuery from '@hooks/usePagingQuery';
import GET_ALLCATEGORIES from '@graphql/categories/getAllCategories';
import { setLoading } from './reducer';

// eslint-disable-next-line import/prefer-default-export
export const useGetCategories = ({ dispatch }) => {
  const [megaStructure, setMegaStructure] = React.useState({});
  const { loading, data } = usePagingQuery(GET_ALLCATEGORIES, 'categories');

  React.useEffect(() => {
    if (loading && dispatch) {
      dispatch(setLoading(loading));
    }
  }, [loading, dispatch]);


  React.useEffect(() => {
    const tempStructure = {};

    if (data && data.categories) {
      data.categories.forEach((cat) => {
        if (!cat.parent) {
          tempStructure[cat.name] = {};
        }
      });
      data.categories.forEach((cat) => {
        if (cat.parent) {
          tempStructure[cat.parent.name][cat.name] = `/category/${cat.id}`;
        }
      });
      if (dispatch) {
        dispatch(setLoading(loading));
      }
      setMegaStructure(tempStructure);
    }
  }, [data, dispatch]);
  return {
    megaStructure
  };
};
