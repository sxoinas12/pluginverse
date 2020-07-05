import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '@assets/icons/search-icon.svg';
import styles from './styles.module.less';


const SearchBox = ({ onChange, onSubmit }) => {
  const [query, setQuery] = useState('');
  const _handleChange = useCallback(e => {
    const { value } = e.target;
    setQuery(value);
    if (onChange) {
      onChange(value);
    }
  });

  const _handleKeyPress = useCallback(e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }, [query]);

  return (
    <span
      className={styles.searchBox}
      onKeyPress={_handleKeyPress}
    >
      <div
        className={styles.left}
        role="button"
        onClick={onSubmit}
      >
        <img
          src={searchIcon}
          alt="Search icon"
        />
      </div>
      <input value={query} onChange={_handleChange} className={styles.box} placeholder="Search" label="Search" />
    </span>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchBox;
