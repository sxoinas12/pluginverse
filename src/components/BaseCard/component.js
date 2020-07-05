import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const defaultAvatar = require('../../assets/icons/avatar.svg');

const BaseCard = ({
  header,
  description,
  author,
  avatar,
  tools,
  image
}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={styles.cardContainer}>
          <Row>
            <Col>
              <div
                className={styles.divider}
                style={{
                  background: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className={styles.tools}>
                  {tools.figma && <img src={require('@assets/icons/figma.svg')} alt="Figma" />}
                  {tools.adobe && <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />}
                  {tools.sketch && <img src={require('@assets/icons/sketch.svg')} alt="Sketch" />}
                </div>
                <div className={styles.icon}>
                  <img src={avatar || defaultAvatar} alt="" />
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.descriptionContainer}>
            <Col xs={12}>
              <Row className={styles.author}>{author}</Row>
              <Row className={styles.header}>{header}</Row>
              <Row className={styles.description}>{description}</Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

BaseCard.propTypes = {
  author: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.shape({
    figma: PropTypes.any,
    adobe: PropTypes.any,
    sketch: PropTypes.any
  }),
  avatar: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string
  })
};

BaseCard.defaultProps = {
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


export default BaseCard;
