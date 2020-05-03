import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from "react-router-dom";

import menuIcon from '@assets/icons/menu-icon.svg';
import styles from './styles.module.less';
import SearchBox from '../SearchBox';

const NavBar = () => {
  let [menu, setMenu] = React.useState(false);

  return (
    <Row className={styles.navContainer}>
      <Col xs={12} sm={4} className={styles.left}>
        <a onClick={() => setMenu(!menu)}>
          <img src={menuIcon} alt="Menu icon" className={styles.left} />
        </a>
        <Link to="/explore">
          <span className={styles.active}>Explore</span>
        </Link>
        <Link to="/categories">
          <span className={styles.element}>Categories</span>
        </Link>
      </Col>
      <Col xs={12} sm={8} align="right" className={styles.right}>
        <SearchBox />
        <Link to="/suggest">
          <span>Suggest a plugin</span>
        </Link>
      </Col>
    </Row>
  );
};

export default NavBar;
