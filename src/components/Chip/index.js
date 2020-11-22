import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.less';


const Chip = (props) => {
  const {
    icon,
    text,
    url
  } = props;

  return (
    url ? 
    <a href={url} className={styles.link}>
      <div className={styles.chip}>
        {text.toUpperCase()}
      </div>
    </a>:
    <div className={styles.chip}>
      {text.toUpperCase()}
    </div>
  );
};

Chip.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

Chip.defaultProps = {
  icon: null,
  text: 'chip'
};

export default Chip;
