import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import styles from './styles.module.less';
import Pages from '../pages';

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Pages.Home} />
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
