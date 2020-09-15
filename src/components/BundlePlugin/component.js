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
            {tools.figma && <img src={require('@assets/icons/figma.svg')} alt="Figma" />}
            {tools.adobe && <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />}
            {tools.sketch && <img src={require('@assets/icons/sketch.svg')} alt="Sketch" />}
          </div>
        </div>
        <div className={styles.headerTitle}>Clean Document</div>
        <div className={styles.authorText}>
          By&nbsp;
          {author}
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

BundlePlugin.defaultProps = {
  description: 'This is a description of one sentence for the plugin',
  header: 'VisualEyes',
  author: 'makerName',
  tools: {
    figma: {},
    adobe: {},
    sketch: {}
  },
  avatar: require('../../assets/icons/avatar.svg'),
  image: {
    url: 'https://strapi.bappy.tech/uploads/ca54d9bd4b0c48de91fd06ef9fb74690.png?294960.89500000014'
  }
};


export default BundlePlugin;
