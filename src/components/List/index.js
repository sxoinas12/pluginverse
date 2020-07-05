import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-grid-system';

import BaseCard from '../BaseCard';
import styles from './styles.module.less';

const List = (props) => {
  const {
    base,
    data
  } = props;
  const Base = base;

  return (
    <Row className={styles.row}>
      {data.map((card, i) => (
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className={styles.col} key={card._key || i}>
          <div className={styles.content}>
            <Base {...card} />
          </div>
        </Col>
      ))}
    </Row>
  );
};


List.propTypes = {
  base: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    tools: PropTypes.shape({}),
    avatar: PropTypes.string
  }))
};

List.defaultProps = {
  base: BaseCard,
  data: [
    {
      author: 'Author 1',
      header: 'Header 1',
      description: 'description lorem ipsum 1',
      tools: {
        figma: 1
      }
    },
    {
      author: 'Author 2',
      header: 'Header 2',
      description: 'description lorem ipsum 2',
      tools: {
        adobexd: 1
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: 1
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: 1
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: 1
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: 1
      }
    }
  ]
};

export default List;
