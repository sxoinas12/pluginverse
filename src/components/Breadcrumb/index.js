import React from 'react';
import { withRouter } from 'react-router-dom';
// import BrowserHistory from 'react-router/lib/BrowserHistory';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.less';

const Breadcrumb = (props) => {

  const {
    children
  } = props;

  const enhanced = children.reduce((result, element, index, array) => {
    result.push(React.cloneElement(element, { key: 2 * index }));
    if (index < array.length - 1) {
      result.push(<span key={ 2 * index + 1} className={styles.bracer}>/</span>);
    }
    return result;
  }, []);

  return (
    <div className={styles.breadcrumb}>
      <img src={require('@assets/icons/arrow-left.svg')} alt="Go Back" onClick={() => props.history.goBack()} />
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
