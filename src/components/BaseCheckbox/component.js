import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.less';

const BaseCheckbox = ({ isSelected }) => (
  <div
    className={classNames(styles.checkboxContainer, isSelected ? styles.selectedContainer : '')}
  >
    <img src={require('@assets/icons/checkbox.svg')} alt="" />
  </div>
);

BaseCheckbox.propTypes = {
  isSelected: PropTypes.bool,
};

BaseCheckbox.defaultProps = {
  isSelected: true
};

export default BaseCheckbox;
