import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.less';

const BaseCard = ({
  header,
  description,
  tools
}) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
          <div>
            <div className={styles.icon}>
              <img src={require('@assets/images/visual-eyes.svg')} alt="" />
            </div>
          </div>
          <div>
            <div className={styles.upvotes}>
              <div>
                <img src={require('@assets/icons/arrow-up.svg')} alt="" />
              </div>
              <div className={styles.upvotesNumber}>236</div>
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div>
            <div className={styles.header}>{header}</div>
            <div className={styles.tools}>
              <img src={require('@assets/icons/figma.svg')} alt="Figma" className={tools.figma ? styles.hasTool : null} />
              <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" className={tools.adobe ? styles.hasTool : null} />
              <img src={require('@assets/icons/sketch.svg')} alt="Sketch" className={tools.sketch ? styles.hasTool : null} />
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BaseCard.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.shape({
    figma: PropTypes.any,
    adobe: PropTypes.any,
    sketch: PropTypes.any
  }),
  image: PropTypes.shape({
    url: PropTypes.string
  })
};

BaseCard.defaultProps = {
  description: 'This is a description of one sentence for the plugin',
  header: 'VisualEyes',
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


export default BaseCard;
