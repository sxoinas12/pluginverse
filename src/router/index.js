import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styles from './styles.module.less';
import { Container, Row, Col } from 'react-grid-system';
import Pages from '../pages';
import Layouts from '../layouts';


// Layout example may be useful for header and footer
const LayoutRoute = (props) => {
  const {
    header,
    footer,
    component,
    children,
    ...rest
  } = props;
  const Comp = component;
  return (
    <Container>
      <Route {...rest}>
        { header && React.createElement(header)}
        { children }
        { component && React.createElement(component)}
        { footer && React.createElement(footer)}
      </Route>
    </Container>
  );
};

const AppRouter = () => (
  <Router>
    <LayoutRoute path="/" exact component={Pages.Home} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/author/:id" exact component={Pages.AuthorDetails} />
    <Route path="/authors" exact component={Pages.AuthorList} />
    <Route path="/bundle/:id" exact component={Pages.BundleDetails} />
    <Route path="/bundles" exact component={Pages.BundleList} />
    <Route path="/category/:id" exact component={Pages.CategoryDetails} />
    <Route path="/categories" exact component={Pages.CategoryList} />
    <Route path="/plugin/:id" exact component={Pages.PluginDetails} />
    <Route path="/search" exact component={Pages.Search} />
    <Route path="/contact" exact component={Pages.Contact} />
  </Router>
);

export default AppRouter;
