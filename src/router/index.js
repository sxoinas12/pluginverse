import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './styles.module.less';
import Home from '../pages/Home';

const AppRouter = () => (
  <Router>
    <div className={styles.navBar}> Navbar</div>
    <Route path="/" exact component={Home} />
  </Router>
);

export default AppRouter;
