/* eslint-disable import/prefer-default-export */
import { useQuery } from '@apollo/react-hooks';
import GET_BUNDLES from '@graphql/bundles/getBundles';

export const useBundlesList = () => {
  const { data, error, loading } = useQuery(GET_BUNDLES());

  return {
    bundles: data ? data.bundles : [],
    error,
    loading
  };
};
