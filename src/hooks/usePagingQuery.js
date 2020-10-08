import { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';


export default function usePagingQuery(fn, arrayName) {
  const [array, setArray] = useState({ [arrayName]: [] });
  const [page, setPage] = useState(0);

  const { data, error, loading } = useQuery(fn(page));
  if (loading) {
    return { data: null, error: false, loading: true };
  }
  if (data[arrayName] && data[arrayName].length > 0) {
    setPage(page + 1);
    setArray({ [arrayName]: [...(array[arrayName] || []), ...(data[arrayName] || [])] });
    return { data: null, error: false, loading: true };
  }
  if (data[arrayName] && data[arrayName].length === 0) {
    return {
      data: array,
      error: false,
      loading: false,
      page 
    };
  }
  if (error) {
    return { data: null, error, loading: false };
  }
  return { data, error, loading };
}
