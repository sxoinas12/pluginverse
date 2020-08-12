import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Visible } from 'react-grid-system';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import menuIcon from '@assets/icons/menu-icon.svg';
import logo from '@assets/logo.svg';
import styles from './styles.module.less';
import SearchBox from '../SearchBox';
import MegaMenu from '../MegaMenu';


const NavBar = ({ megaStructure, bundleNav }) => {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = useCallback(searchQuery => setQuery(searchQuery), [setQuery]);
  const handleSubmit = useCallback(() => history.push(`/search/${query}`), [query]);

  let navReact = (
    <Row className={classNames([styles.navContainer, styles[bundleNav]])} key={1}>
      <Col>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={5} className={styles.left}>
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
            <Col xs={12} md={6} lg={3} align="center" className={styles.center}>
              <Row><Col xs={12} lg={8}>
                <img src={logo} alt="Pluginverse Logo" />
              </Col><Col xs={0} lg={4}></Col></Row>
            </Col>
            <Col xs={12} lg={4} align="right" className={styles.right}>
              <SearchBox onChange={handleSearch} onSubmit={handleSubmit} />
              <div>
                <Link to="/suggest">
                  <span>Suggest a plugin</span>
                </Link>
              </div>
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
