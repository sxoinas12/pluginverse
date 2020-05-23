import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import menuIcon from '@assets/icons/menu-icon.svg';
import styles from './styles.module.less';
import SearchBox from '../SearchBox';

const NavBar = ({ bundleNav }) => {
  const [menu, setMenu] = React.useState(false);

  return (
    <Row className={classNames([styles.navContainer, styles[bundleNav]])}>
      <Col xs={12} sm={4} className={styles.left}>
        <a role="button" onClick={() => setMenu(!menu)}>
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
