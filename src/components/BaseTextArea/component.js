import React, { useCallback, useState } from 'react';
import styles from './styles.module.less';
import { Primary0, Primary2, Primary3 } from '../../styles/variables.js';

const FocusStyle = {
  border: `2px solid ${Primary3}`
};

const BaseTextArea = ({
  placeholder,
  onChange,
  defaultValue
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
      onChange(value);
    }
  }, [setQuery]);
  return (
    <div
      className={styles.textAreaContainer}
    >
      <textarea
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
    </div>
  );
};

export default BaseTextArea;
