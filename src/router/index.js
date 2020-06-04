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
    <Route {...rest}>
      <Container fluid>
        { header && React.createElement(header)}
        <Container>
        { children }
        { component && React.createElement(component)}
        </Container>
        { footer && React.createElement(footer)}
      </Container>
    </Route>
  );
};

const AppRouter = () => (
  <Router>
    <LayoutRoute path="/" exact component={Pages.Home} header={Layouts.Header} footer={Layouts.Footer} />
    <LayoutRoute path="/test" exact component={Pages.NikTest} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/author/:id" exact component={Pages.AuthorDetails} />
    <Route path="/authors" exact component={Pages.AuthorList} />
    <Route path="/bundle/:id" exact component={Pages.BundleDetails} />
    <Route path="/bundles" exact component={Pages.BundleList} />
    <LayoutRoute path="/category/:id" exact component={Pages.CategoryDetails} header={Layouts.Header} footer={Layouts.Footer} />
    <Route path="/categories" exact component={Pages.CategoryList} />
    <Route path="/plugin/:id" exact component={Pages.PluginDetails} />
    <Route path="/search" exact component={Pages.Search} />
    <Route path="/contact" exact component={Pages.Contact} />

  </Router>
);

export default AppRouter;
