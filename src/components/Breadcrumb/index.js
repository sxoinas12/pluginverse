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
  const bracer = <span className={styles.bracer}>/</span>;

  const enhanced = children.reduce((result, element, index, array) => {
    result.push(element);
    if (index < array.length - 1) {
      result.push(bracer);
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
  children: PropTypes.oneOf([
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
