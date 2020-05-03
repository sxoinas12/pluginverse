import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const BaseCard = ({
  header,
  description,
  author,
  avatar,
  tools
}) => {
  return (
    <Row>
      <Col className={styles.cardContainer} xs={12}>
        <Row>
          <Col className={styles.tools}>
            {tools.figma && <img src={require('@assets/icons/figma.svg')} alt="" />}
            {tools.adobe && <img src={require('@assets/icons/adobe.svg')} alt="" />}
            {tools.sketch && <img src={require('@assets/icons/sketch.svg')} alt="" />}
            <div className={styles.icon}>
              <img src={avatar} alt="" />
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
      </Col>
    </Row>
  );
};

BaseCard.propTypes = {
  author: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.shape({}),
  avatar: PropTypes.string
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
  avatar: require('../../assets/icons/avatar.svg')
};


export default BaseCard;
