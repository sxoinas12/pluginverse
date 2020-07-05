import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-grid-system';
import Pages from '../pages';
import Layouts from '../layouts';
// Layout example may be useful for header and footer

const LayoutRoute = (props) => {
  const {
    header,
    bundleNav,
    footer,
    component,
    children,
    fluid,
    ...rest
  } = props;
  return (
    // eslint-disable jsx-props-no-spreading
    <Route {...rest}
      render={({ match }) => {
        return (
          <Container fluid>
            { header && React.createElement(header)}
            {fluid ? (
              <>
                { children }
                { component && React.createElement(component)}
              </>
            ) : (
              <Container>
                {console.log('this is fine', rest, match)}
                { children }
                { component && React.createElement(component, match)}
              </Container>
            )}
            { footer && React.createElement(footer)}
          </Container>
        )
      }}
      />
  );
};

const AppRouter = () => (
  <Router>
    <LayoutRoute path="/" exact component={Pages.Home} header={Layouts.Header} footer={Layouts.Footer} fluid />
    <LayoutRoute path="/test" exact component={Pages.NikTest} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/author/:id" exact component={Pages.AuthorDetails} />
    <Route path="/authors" exact component={Pages.AuthorList} />
    <LayoutRoute path="/bundle/:id" exact component={Pages.BundleDetails} header={Layouts.Header} bundleNav="bundleNav" footer={Layouts.Footer} />
    <Route path="/bundles" exact component={Pages.BundleList} />
    <LayoutRoute path="/category/:id" exact component={Pages.CategoryDetails} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/categories" exact component={Pages.CategoryList} />
    <LayoutRoute path="/plugin/:id" exact component={Pages.PluginDetails} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/search" exact component={Pages.Search} />
    <Route path="/contact" exact component={Pages.Contact} />
  </Router>
);

export default AppRouter;
