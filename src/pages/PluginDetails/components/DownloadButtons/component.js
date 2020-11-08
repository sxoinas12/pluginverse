import React from 'react';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const DownloadButtons = ({ links }) => {
  return (
    <Row>
      <Col>
        <div className={styles.downloadButtonsContainer}>
          {links.map((link, index) => {
            const clearlink = `https://${link.link.replace(/^http(s?):\/\//i, '')}`;
            switch (link.tool.name) {
              case 'Sketch': {
                return (
                  <a href={clearlink} target="_new" key={index}>
                    <div className={styles.toolContainer}>

                      <img src={require('@assets/icons/sketch.svg')} alt="" />
                      <span className={styles.toolText}>
                        Download for&nbsp;
                        {link.tool.name}
                      </span>
                    </div>
                  </a>
                );
              }
              case 'AdobeXD': {
                return (
                  <a href={clearlink} target="_new" key={index}>
                    <div className={styles.toolContainer}>
                      <img src={require('@assets/icons/adobe.svg')} alt="" />
                      <span className={styles.toolText}>
                        Download for XD
                      </span>
                    </div>
                  </a>
                );
              }
              case 'Figma': {
                return (
                  <a href={clearlink} target="_new" key={index}>
                    <div className={styles.toolContainer}>
                      <img src={require('@assets/icons/figma.svg')} alt="" />
                      <span className={styles.toolText}>
                        Download for&nbsp;
                        {link.tool.name}
                      </span>
                    </div>
                  </a>
                );
              }
              default:
                return null;
            }
          })}
        </div>
      </Col>
    </Row>
  );
};

export default DownloadButtons;
