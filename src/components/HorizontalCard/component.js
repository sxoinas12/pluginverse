import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const bestForDesription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate eget non eget pellentesque luctus vulputate pretium.';


const HorizontalCard = ({
  header,
  description,
  author,
  avatar,
  tools
}) => {
  return (
    <Row className={styles.horizontalCardContainer}>
      <Col xs={12}>
        <Row className={styles.cardContent}>
          <Col xs={2}>
            <div className={styles.avatar}>
              <img src={avatar} alt="" />
            </div>
          </Col>
          <Col xs={4}>
            <Row>
              <Col>
                <div className={styles.tools}>
                  <div className={styles.toolsText}>Available In</div>
                  {tools.figma && <img src={require('@assets/icons/figma.svg')} alt="Figma" />}
                  {tools.adobe && <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />}
                  {tools.sketch && <img src={require('@assets/icons/sketch.svg')} alt="Sketch" />}
                </div>
              </Col>
            </Row>
            <Row>
              <Col className={styles.header}>
                {header}
              </Col>
            </Row>
            <Row>
              <Col className={styles.description}>
                {description}
              </Col>
            </Row>
            <Row>
              <Col className={styles.maker}>
                by
                {' '}
                {author}
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <Row className={styles.bestFor}>Best for</Row>
            <Row className={styles.bestForText}>{bestForDesription}</Row>
          </Col>
          <Col xs={3} className={styles.pluginButtonContainer}>
            <div role="button" className={styles.pluginButton} onClick={() => console.log('whata')}>
              Go to Plguin
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={styles.divider} />
        </Row>
      </Col>
    </Row>
  );
};

HorizontalCard.propTypes = {
  author: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.shape({
    figma: PropTypes.shape({}),
    adobe: PropTypes.shape({}),
    sketch: PropTypes.shape({})
  }),
  avatar: PropTypes.string
};

HorizontalCard.defaultProps = {
  description: 'This is a description of one sentence for the plugin',
  header: 'Clean Document',
  author: 'makerName',
  tools: {
    figma: {},
    adobe: {},
    sketch: {}
  },
  avatar: require('../../assets/icons/avatar.svg')
};

export default HorizontalCard;
