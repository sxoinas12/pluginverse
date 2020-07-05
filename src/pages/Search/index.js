import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col } from 'react-grid-system';
import SEARCH_PLUGIN from './queries';

const Search = ({ params }) => {
  const { loading, error, data } = useQuery(SEARCH_PLUGIN(params.query));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      <Col xs={12}>
        Search Page
      </Col>
    </Row>
  );
};

Search.propTypes = {
  params: PropTypes.shape({
    query: PropTypes.any
  })
};

export default Search;
