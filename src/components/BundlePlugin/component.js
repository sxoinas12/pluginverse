import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.less';

const BundlePlugin = ({ description, author, tools }) => {
  return (
    <div className={styles.bundlePluginContainer}>
      <div>
        <div className={styles.icon}>
          <img src={require('@assets/images/visual-eyes.svg')} alt="" />
        </div>
      </div>
      <div>
        <div className={styles.availableContainer}>
          <div className={styles.availableText}>Avialable in</div>
          <div className={styles.availableTools}>
            {tools.map((tool, index) => {
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
        <div className={styles.headerTitle}>Clean Document</div>
        <div className={styles.authorText}>
          By&nbsp;
          {author.name}
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.bestForText}>Best of</div>
        <div className={styles.descriptionText}>{description}</div>
      </div>
      <div className={styles.buttonContainer}>
        <div role="button" className={styles.pluginButton} onClick={() => console.log('go to plugin')}>
          <a>Go to Plugin page</a>
        </div>
      </div>
    </div>
  );
};


BundlePlugin.propTypes = {
  plugin: PropTypes.shape({})
};



export default BundlePlugin;
