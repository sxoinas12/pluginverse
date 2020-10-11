import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.module.less';

const Breadcrumb = (props) => {
  const {
    children,
    theme,
  } = props;

  const enhanced = children.reduce((result, element, index, array) => {
    result.push(React.cloneElement(element, { key: 2 * index }));
    if (index < array.length - 1) {
      result.push(<span key={2 * index + 1} className={theme === 'dark' ? styles.darkBracer : styles.bracer}>/</span>);
    }
    return result;
  }, []);

  return (
    <div className={classNames(styles.breadcrumb, styles[theme])}>
      <img
        src={theme === 'dark'
          ? require('@assets/icons/arrow-white-left.svg')
          : require('@assets/icons/arrow-left.svg')}
        alt="Go Back"
        onClick={() => props.history.goBack()}
      />
      {enhanced}
    </div>
  );
};


Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node
  ])
};

Breadcrumb.defaultProps = {
  children: [
    (<Link to="/">Root</Link>),
    (<h3>Test</h3>)
  ]
};

export default withRouter(Breadcrumb);
