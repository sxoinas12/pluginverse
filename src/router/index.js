import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-grid-system';
import BaseLoader from '@components/BaseLoader';
import Pages from '../pages';
import Layouts from '../layouts';
import { useGetCategories } from './useGetCategories.js';
import reducer from './reducer';
import styles from './styles.module.less';
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
    theme,
    ...rest
  } = props;

  const { megaStructure } = useGetCategories({ dispatch });

  return (
    // eslint-disable jsx-props-no-spreading
    <Route
      {...rest}
      render={({ match }) => {
        if (state && state.isLoading) {
          return (
            <BaseLoader isLoading />
          );
        }
        return state && !state.isLoading && (
          <Container fluid>
            { header && React.createElement(header, { megaStructure, theme })}
            {fluid ? (
              <>
                { children }
                { component && React.createElement(component, { dispatch, match })}
              </>
            ) : (
              <Container style={{ maxWidth: '1440px' }}>
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
      <LayoutRoute path="/bundle/:id" exact component={Pages.BundleDetails} header={Layouts.Header} fluid footer={Layouts.Footer} {...rest} theme="dark" />
      <LayoutRoute path="/bundles" exact component={Pages.BundlesList} header={Layouts.Header} fluid footer={Layouts.Footer} {...rest} />
      <LayoutRoute path="/category/:id" exact component={Pages.CategoryDetails} header={Layouts.Header} footer={Layouts.Footer} {...rest} />
      <Route path="/categories" exact component={Pages.CategoryList} />
      <LayoutRoute path="/plugin/:id" exact component={Pages.PluginDetails} header={Layouts.Header} footer={Layouts.Footer} {...rest} />
      <LayoutRoute path="/search/:query" exact component={Pages.Search} />
      <Route path="/contact" exact component={Pages.Contact} />
    </Router>
  );
};

export default AppRouter;
