import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from "react-router-dom";

import menuIcon from '@assets/icons/menu-icon.svg';
import styles from './styles.module.less';
import SearchBox from '../SearchBox';
import MegaMenu from '../MegaMenu';
import classNames from 'classNames';

const NavBar = ({ megaStructure, bundleNav }) => {
  let [menu, setMenu] = React.useState(false);

  let navReact = (
    <Row className={classNames([styles.navContainer, styles[bundleNav]])} key={1}>
      <Col>
        <Container>
          <Row>
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
        </Container>
      </Col>
    </Row>
  );
  if (menu) navReact = [navReact, <MegaMenu key={2} structure={megaStructure} />];
  return navReact;
};

NavBar.propTypes = {
  megaStructure: PropTypes.shape({})
};

export default NavBar;
