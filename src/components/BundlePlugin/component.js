import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'react-grid-system';
import styles from './styles.module.less';

const BundlePlugin = ({
  name, description, author, tools, id
}) => {
  return (
    <Row className={styles.bundlePluginContainer}>
      <Col xs={2}>
        <div className={styles.icon}>
          <img src={require('@assets/images/visual-eyes.svg')} alt="" />
        </div>
      </Col>
      <Col xs={3} className={styles.dataSection}>
        <div className={styles.availableContainer}>
          <div className={styles.availableText}>Available in</div>
          <div className={styles.availableTools}>
            {tools && tools.map((tool, index) => {
              switch (tool.name) {
                case 'Figma':
                  return <img key={index} src={require('@assets/icons/figma.svg')} alt="Figma" />;
                case 'Adobe':
                  return <img key={index} src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />;
                case 'Sketch':
                  return <img key={index} src={require('@assets/icons/sketch.svg')} alt="Sketch" />;
                default:
                  return '';
              }
            })}
          </div>
        </div>
        <div className={styles.headerTitle}>{name}</div>
        <div className={styles.authorText}>
          By&nbsp;
          {author && author.name}
        </div>
      </Col>
      <Col xs={4} className={styles.descriptionContainer}>
        <div className={styles.bestForText}>Best of</div>
        <div className={styles.descriptionText}>{description}</div>
      </Col>
      <Col xs={3} className={styles.buttonContainer}>
        <div role="button" className={styles.pluginButton}>
          <a href={`/plugin/${id}`}>Go to Plugin page</a>
        </div>
      </Col>
    </Row>

  );
};


BundlePlugin.propTypes = {
  plugin: PropTypes.shape({})
};


export default BundlePlugin;
