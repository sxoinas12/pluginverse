import React, { useState, useCallback } from 'react';
import { Row, Col, Container } from 'react-grid-system';
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
              <Col xs={2}>
                <Row><h4 className={styles.sectionHeader}>Menu</h4></Row>
                {routes.map((route, index) => (
                  <Row key={index}>
                    <div className={styles.sectionItem}>
                      {route.name}
                    </div>
                  </Row>
                ))}
              </Col>
              <Col xs={2}>
                <Row><h4 className={styles.sectionHeader}>Plguin Categories</h4></Row>
                {pluginCategories.map((category, index) => (
                  <Row key={index}>
                    <div className={styles.sectionItem}>
                      {category.name}
                    </div>
                  </Row>
                ))}
              </Col>
              <Col xs={2}>
                <Row><h4 className={styles.sectionHeader}>Latest Bundles</h4></Row>
                {latestBundles.map((bundle, index) => (
                  <Row key={index}>
                    <div className={styles.sectionItem}>
                      {bundle.name}
                    </div>
                  </Row>
                ))}
              </Col>
              <Col xs={6}>
                <Row><h3 className={styles.sectionHeader}>Subscribe to our newsletter</h3></Row>
                <Row>
                  <div className={styles.inputContainer}>
                    <input placeholder="Enter your email" onChange={hadnleChange} className={styles.emailInput} value={query} />
                  </div>
                </Row>
                <Row>
                  <div role="button" onClick={() => console.log('subscribe')} type="submit" className={styles.submitButton}>
                    Join our newsletter
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  } catch(error) {
    console.log('sdasdad')
    console.log(error)
 
  }
  
  
  
 
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
