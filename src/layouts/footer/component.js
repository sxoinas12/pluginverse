import React, { useState, useCallback } from 'react';
import { Row, Col, Container } from 'react-grid-system';

import { NewsletterInput } from '@components/Newsletter';
import styles from './styles.module.less';

const Footer = ({ routes, pluginCategories, latestBundles }) => {
  try {
    const [query, setQuery] = useState('');
    const hadnleChange = useCallback((e) => {
      const { value } = e.target;
      setQuery(value);
    }, [setQuery]);
    return (

      <Row className={styles.footerContainer}>
        <Col>
          <Container>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={4} md={4} lg={2}>
                    <div><h4 className={styles.sectionHeader}>Menu</h4></div>
                    {routes.map((route, index) => (
                      <div key={index}>
                        <div className={styles.sectionItem}>
                          {route.name}
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xs={4} md={4} lg={2}>
                    <div><h4 className={styles.sectionHeader}>Plguin Categories</h4></div>
                    {pluginCategories.map((category, index) => (
                      <div key={index}>
                        <div className={styles.sectionItem}>
                          {category.name}
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xs={4} md={4} lg={2}>
                    <div><h4 className={styles.sectionHeader}>Latest Bundles</h4></div>
                    {latestBundles.map((bundle, index) => (
                      <div key={index}>
                        <div className={styles.sectionItem}>
                          {bundle.name}
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xs={12} md={9} lg={6}>
                    <div><h3 className={styles.sectionHeader}>Subscribe to our newsletter</h3></div>
                    <div>
                      <NewsletterInput />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  } catch (error) {}
};

Footer.defaultProps = {
  routes: [
    {
      name: 'Homepage'
    },
    {
      name: 'Contact us'
    },
    {
      name: 'Submit your plugin'
    }
  ],
  pluginCategories: [
    {
      name: 'SubCategory 2'
    },
    {
      name: 'SubCategory 2'
    }
  ],
  latestBundles: [
    {
      name: 'Spotify Bundle'
    },
    {
      name: 'Spotify Bundle'
    },
    {
      name: 'Spotify Bundle'
    },
    {
      name: 'Spotify Bundle'
    }
  ]
};

export default Footer;
