import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-grid-system';
import BaseLoader from '@components/BaseLoader';
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
                { component && React.createElement(component, { state, dispatch, match, ...rest })}
              </>
            ) : (
              <Container>
                { children }
                { component && React.createElement(component, { state, dispatch, match })}
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
    isLoading: false,
    designTools : [
      { key: 'Figma', value: 1 },
      { key: 'AdobeXD', value: 2 },
      { key: 'Sketch', value: 3 }
    ],
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const rest = {
    state,
    dispatch
  };

  return (
    <Router>
      <Switch>
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
        <LayoutRoute fluid path="/contact" exact component={Pages.Contact} header={Layouts.Header}  {...rest} />
        <Route component={Pages.Errors.Error404} />
      </Switch>
    </Router>

  );
};

export default AppRouter;
