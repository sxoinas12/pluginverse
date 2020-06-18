import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.less';


const Chip = (props) => {
  const {
    icon,
    text
  } = props;

  return (
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
