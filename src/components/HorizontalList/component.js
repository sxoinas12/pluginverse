import React from 'react';
import { Row, Col } from 'react-grid-system';
import HorizontalCard from '../HorizontalCard/component';

const HorizontalList = (props) => {
  const {
    base,
    data
  } = props;
  const Base = base;

  return (
    <Row>
      <Col xs={12}>
        {data.map((card, index) => (
          <React.Fragment key={index}>
            <Base {...card} />
          </React.Fragment>
        ))}
      </Col>
    </Row>
  );
};


HorizontalList.defaultProps = {
  base: HorizontalCard,
  data: [
    {
      author: 'Author 1',
      header: 'Header 1',
      description: 'description lorem ipsum 1',
      tools: {
        figma: {}
      }
    },
    {
      author: 'Author 2',
      header: 'Header 2',
      description: 'description lorem ipsum 2',
      tools: {
        adobexd: {}
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: {}
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: {}
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: {}
      }
    },
    {
      author: 'Author 3',
      header: 'Header 3',
      description: 'description lorem ipsum 3',
      tools: {
        sketch: {}
      }
    }
  ]
};


export default HorizontalList;
