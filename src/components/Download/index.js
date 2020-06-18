import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.less';


const Download = (props) => {
  const {
    link
  } = props;

  return (
    <div className={styles.link}>
      <a href={link.link} target="_new">
        <div className={styles.button}>Download for {link.tool.name}</div>
      </a>
    </div>
  );
};

Download.propTypes = {
  link: PropTypes.shape({})
};

Download.defaultProps = {
  link: {
    tool: {name : "TEST TOOL"},
    link: "#"
  }
};

export default Download;
