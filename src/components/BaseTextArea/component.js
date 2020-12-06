import React, { useCallback, useState } from 'react';
import styles from './styles.module.less';
import { Primary0, Primary2, Primary3 } from '../../styles/variables.js';

const FocusStyle = {
  border: `1px solid ${Primary3}`
};

const BaseTextArea = ({
  placeholder,
  onChange,
  defaultValue,
  label,
  name,
}) => {
  const [query, setQuery] = useState(defaultValue || '');
  const [focusStyles, setFocusStyle] = useState({});

  const handleFocus = useCallback(() => {
    setFocusStyle(FocusStyle);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusStyle({});
  }, []);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setQuery(value);
    if (onChange) {
      onChange({ name, value });
    }
  }, [setQuery]);
  return (
    <div
      className={styles.textAreaContainer}
    >
      <label htmlFor="text">
        {label}
        <textarea
          name={name}
          style={{
            background: query ? Primary2 : 'none',
            border: `1px solid ${Primary0}`,
            ...focusStyles
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default BaseTextArea;
