import React, { useState, useCallback } from 'react';
import styles from './styles.module.less';
import { Primary0, Primary2, Primary3 } from '../../styles/variables.js';

const FocusStyle = {
  borderBottom: `2px solid ${Primary3}`,
};

const BaseInput = ({
  onChange,
  defaultValue,
  placeholder,
  isValid
}) => {
  const [query, setQuery] = useState(defaultValue || '');
  const [focusStyles, setFocusStyle] = useState({});

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setQuery(value);
    if (onChange) {
      onChange(value);
    }
  }, [setQuery]);

  const handleFocus = useCallback(() => {
    setFocusStyle(FocusStyle);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusStyle({});
  }, []);

  return (
    <div
      style={{
        background: query ? Primary2 : 'none',
        borderBottom: `1px solid ${Primary0}`,
        ...focusStyles
      }}
      className={styles.inputContainer}
    >
      <input
        style={{ background: query ? Primary2 : 'none' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.baseInput}
        onChange={handleChange}
        value={query}
        placeholder={placeholder}
      />
      { isValid ? null
        : <img className={styles.imageContainer} src={require('@assets/icons/input-error.svg')} alt="Invalid" />}
    </div>
  );
};

export default BaseInput;
