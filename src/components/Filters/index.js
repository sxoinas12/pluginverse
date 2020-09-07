import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Container, Row, Col } from 'react-grid-system';

import styles from './styles.module.less';


const catQuery = gql`{
  categories (where: {parent_null: true}, limit:5){
    id,
    name
  }
}`;


const Filters = (props) => {
  const {
    onSelect
  } = props;
  const [selected, setSelected] = useState(-1);
  const { loading, error, data } = useQuery(catQuery);
  if (loading || error) return null;

  if (onSelect) onSelect(selected);

  return (
    <Row style={{ overflow: 'hidden' }} className={styles.fluidContainer}>
      <Col xs={12}>
        <Container className={styles.container}>
          <div className={styles.allLink}>
            <a onClick={() => setSelected(-1)}>
              All
            </a>
          </div>
          {data.categories.map((option) => (
            <div className={styles.link} key={option.id}>
              <a onClick={() => setSelected(option.id)}>
                {option.name}
              </a>
            </div>
          ))}
        </Container>
      </Col>
    </Row>
  );
};

Filters.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ),
  onSelect: PropTypes.func
};

Filters.defaultProps = {
  options: [
    { name: "UX", id: 1 },
    { name: "UI", id: 2 },
    { name: "Assets", id: 3 }
  ],
  onSelect: (option) => null
};

export default Filters;
