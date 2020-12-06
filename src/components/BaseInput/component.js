import React, { useState, useCallback, useEffect } from 'react';
import styles from './styles.module.less';
import { Primary0, Primary2, Primary3, Red3 } from '../../styles/variables.js';

const FocusStyle = {
  borderBottom: `1px solid ${Primary3}`
};

const ErrorStyle = {
  borderBottom: `1px solid ${Red3}`
}

const BaseInput = ({
  onChange,
  defaultValue,
  placeholder,
  isValid,
  label,
  type,
  name,
}) => {
  const [query, setQuery] = useState(defaultValue || '');
  const [focusStyles, setFocusStyle] = useState({});

  useEffect(() => {
    if (!isValid) {
      setFocusStyle(ErrorStyle);
    }
  }, [isValid]);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setQuery(value);
    if (onChange) {
      onChange({ name, value });
    }
  }, [setQuery]);

  const handleFocus = useCallback(() => {
    if (isValid) {
      setFocusStyle(FocusStyle);
    }
  }, [isValid]);

  const handleBlur = useCallback(() => {
    if (isValid) {
      setFocusStyle({});
    }
  }, [isValid]);

  return (
    <label htmlFor={type}>
      {label}
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
          name={name}
        />

        { isValid ? null
          : <img className={styles.imageContainer} src={require('@assets/icons/input-error.svg')} alt="Invalid" />}
      </div>
    </label>
  );
};

export default BaseInput;
