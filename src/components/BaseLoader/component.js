import React from 'react';
import { Container, Col, Row} from 'react-grid-system'
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vmin'
};
const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
    `;

const BaseLoader = ({ isLoading }) => (
  <Container style={containerStyle}>
    <Row>
      <Col xs={12}>
        <DotLoader
          css={override}
          size={150}
          color="#9285B8"
          loading={isLoading}
        />
      </Col>
    </Row>
  </Container>
);

export default BaseLoader;
