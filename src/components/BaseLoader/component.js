import React from 'react';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
    `;

const BaseLoader = ({ isLoading }) => (
  <DotLoader
    css={override}
    size={150}
    color="#9285B8"
    loading={isLoading}
  />
);

export default BaseLoader;
