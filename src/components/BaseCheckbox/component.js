/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.less';

const BaseCheckbox = ({
  isSelected,
  isDisabled,
  handleClick,
  itemKey
}) => {
  const [checked, setChecked] = useState(isSelected);
  useEffect(() => {
    setChecked(isSelected)
  }, [isSelected])

  const handleCheck = useCallback(() => {
    setChecked(!checked);
    handleClick && handleClick(!checked, itemKey);
  }, [checked, handleClick]);

  return (
    <div
      role="button"
      onClick={isDisabled ? null : handleCheck}
      className={classNames({
        [styles.checkboxContainer]: true,
        [styles.selectedContainer]: checked,
        [styles.disabled]: isDisabled
      })}
    >
      {checked && !isDisabled ? <img src={require('@assets/icons/checkbox.svg')} alt="" /> : null}
      {checked && isDisabled ? <img src={require('@assets/icons/disabled-checkbox.svg')} alt="" /> : null}
    </div>
  );
};

BaseCheckbox.propTypes = {
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  itemKey: PropTypes.any
};

BaseCheckbox.defaultProps = {
  isSelected: true,
  isDisabled: false
};

export default BaseCheckbox;
