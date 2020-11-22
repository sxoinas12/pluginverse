import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {
  Container,
  Row,
  Col,
} from 'react-grid-system';
import { useHistory } from 'react-router-dom';
import menuIcon from '@assets/icons/menu-icon.svg';
import whiteMenu from '@assets/icons/menu-white.svg';
import logo from '@assets/logo.svg';
import darkLogo from '@assets/dark-logo.svg';
import styles from './styles.module.less';
import SearchBox from '../SearchBox';
import SearchModal from '../SearchModal'
import MegaMenu from '../MegaMenu';


const NavBar = ({ megaStructure, theme }) => {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = useCallback(searchQuery => setQuery(searchQuery), [setQuery]);
  const handleSubmit = useCallback(() => history.push(`/search/${query}`), [query]);
  let navReact = (
    <Row className={classNames([styles[theme],styles.navContainer])}>
      <Col>
        <Container key={1}>
          <Row>
            <Col xs={12} md={6} lg={4} className={styles.left}>
              <a role="button" onClick={() => setMenu(!menu)}>
                <img src={theme === 'dark' ? whiteMenu : menuIcon} alt="Menu icon" className={styles.left} />
              </a>
            </Col>
            <Col xs={12} md={6} lg={4} align="center" className={styles.center}>
              <a href="/">
                <img src={theme === 'dark' ? darkLogo : logo} alt="Pluginverse Logo" />
              </a>
            </Col>
            <Col xs={12} lg={4} align="right" className={styles.right}>
              {/* <SearchBox onChange={handleSearch} onSubmit={handleSubmit} /> */}
              <SearchModal />
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
