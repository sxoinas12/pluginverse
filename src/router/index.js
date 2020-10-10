import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-grid-system';
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';
import Pages from '../pages';
import Layouts from '../layouts';
import { useGetCategories } from './useGetCategories.js';
import reducer from './reducer';

// Layout example may be useful for header and footer

const LayoutRoute = (props) => {
  const {
    header,
    bundleNav,
    footer,
    component,
    children,
    dispatch,
    state,
    fluid,
    ...rest
  } = props;

  const { megaStructure } = useGetCategories({ dispatch });

  return (
    // eslint-disable jsx-props-no-spreading
    <Route
      {...rest}
      render={({ match }) => {
        if (state && state.isLoading) {
          const override = css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          border-color: red;
        `;
          return (
            <DotLoader
              css={override}
              size={150}
              color="#9285B8"
              loading={state.isLoading}
            />
          );
        }
        return state && !state.isLoading && (
          <Container fluid>
            { header && React.createElement(header, megaStructure)}
            {fluid ? (
              <>
                { children }
                { component && React.createElement(component, dispatch)}
              </>
            ) : (
              <Container>
                { children }
                { component && React.createElement(component, { dispatch, match })}
              </Container>
            )}
            { footer && React.createElement(footer)}
          </Container>
        );
      }}
    />
  );
};

const AppRouter = () => {
  const initialState = {
    isLoading: false
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const rest = {
    state,
    dispatch
  };
  return (
    <Router>
      <LayoutRoute path="/" exact component={Pages.Home} header={Layouts.Header} footer={Layouts.Footer} {...rest} fluid />
      <LayoutRoute path="/test" exact component={Pages.NikTest} header={Layouts.Header} footer={Layouts.Footer} {...rest} />
      <Route path="/author/:id" exact component={Pages.AuthorDetails} />
      <Route path="/authors" exact component={Pages.AuthorList} />
      <Route path="/bundle/:id" exact component={Pages.BundleDetails} />
      <Route path="/bundles" exact component={Pages.BundleList} />
      <LayoutRoute path="/category/:id" exact component={Pages.CategoryDetails} header={Layouts.Header} footer={Layouts.Footer} {...rest} />
      <Route path="/categories" exact component={Pages.CategoryList} />
      <LayoutRoute path="/plugin/:id" exact component={Pages.PluginDetails} header={Layouts.Header} footer={Layouts.Footer} {...rest} />
      <LayoutRoute path="/search/:query" exact component={Pages.Search} />
      <Route path="/contact" exact component={Pages.Contact} />
    </Router>
  );
};

export default AppRouter;
