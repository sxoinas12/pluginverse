import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import styles from './styles.module.less';

const Dropdown = ({
  placeholder,
  options,
  onSelect,
  value,
  style,
}) => {
  useEffect(() => {
    if (options && options[0] && options[0].value && onSelect && !placeholder) {
      onSelect(options[0].value);
    }
  }, [options.length, placeholder]);
  return (
    <select style={style} className={classNames(styles.selectBox)} required value={value} onChange={(e) => onSelect(e.target.value)}>
      <option value="" className={styles.placeholder} disabled hidden>{placeholder}</option>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onSelect: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.shape({}),
};

Dropdown.defaultProps = {
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
  onSelect: null,
  value: 'Value 1',
  style: {},
};

export default Dropdown;
