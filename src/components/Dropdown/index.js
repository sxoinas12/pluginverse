import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.less';

const Dropdown = ({
  placeholder,
  options,
  onSelect
}) => {

  return (
    <select className={styles.selectBox} required onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled selected hidden>{placeholder}</option>
      {options.map((option) => (
        <option value={option.value} key={option.key}>
          {option.key}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.any,
  onSelect: PropTypes.func
};

Dropdown.defaultProps = {
  placeholder: 'Select one option',
  options: [
    {
      key: 'Option 1',
      value: 'Value 1'
    },
    {
      key: 'Option 2',
      value: 'Value 2'
    },
    {
      key: 'Option 3',
      value: 'Value 3'
    }
  ],
  onSelect: null
};

export default Dropdown;
