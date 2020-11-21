import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';

const Badge = ({ tool, text }) => {

  let toolImg = '';
  switch (tool.toLowerCase()) {
    case 'figma':
      toolImg = <img src={require('@assets/icons/figma.svg')} alt="Figma" />;
    case 'adobe': case 'adobexd':
      toolImg = <img src={require('@assets/icons/adobe.svg')} alt="AdobeXD" />;
    case 'sketch':
      toolImg = <img src={require('@assets/icons/sketch.svg')} alt="Sketch" />;
  }

  return (
    <div className={styles.badge}>
      {toolImg}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

Badge.propTypes = {
  tool: PropTypes.string,
  text: PropTypes.string
};

export default Badge;
