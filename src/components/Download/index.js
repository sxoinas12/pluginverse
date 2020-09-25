import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.less';


const Download = (props) => {
  const {
    link
  } = props;
  const clearlink = `https://${link.link.replace(/^http(s?):\/\//i, '')}`;
  return (
    <div className={styles.link}>
      <a href={clearlink} target="_new">
        <div className={styles.button}>
          <img src={link.tool.icon ? `${global.API_URL}${link.tool.icon.url}` : ''} alt={`Download for ${link.tool.name}`} />
          Download for
          {' '}
          {link.tool.name}
        </div>
      </a>
    </div>
  );
};

Download.propTypes = {
  link: PropTypes.shape({
    link: PropTypes.string
  })
};

Download.defaultProps = {
  link: {
    tool: {
      name: 'TEST TOOL',
      icon: { url: null }
    },
    link: '#'
  }
};

export default Download;
