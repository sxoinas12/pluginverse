/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import classnames from 'classnames';
import styles from './styles.module.less';

const Upvote = ({ stars, id }) => {
  const [upvotes, setUpvotes] = useLocalStorage('upvotes', []);
  const [bias, setBias] = useState(0);
  const sendRequest = () => {
    window.fetch(`${global.API_URL}/plugins/upvote/${id}`).then((r) => {
      if (r.status === 204) {
        setUpvotes(upvotes.filter(i => i !== id));
        setBias(bias - 1);
      } else if (r.status === 200) {
        setUpvotes([...upvotes, id]);
        setBias(bias + 1);
      }
    });
  };
  const isSelected = upvotes.includes(id);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classnames({
        [styles.upvoteWrapper]: true,
        [styles.wrapperSelected]: isSelected
      })}
      onClick={() => sendRequest(id)}
    >
      <div className={styles.upvoteIcon}>
        <img src={isSelected ? require('@assets/icons/upvote-tick.svg') : require('@assets/icons/arrow-top.svg')} alt="" />
      </div>
      <div className={styles.upvoteText}>
        {isSelected ? 'Upvoted' : 'Upvote'}
      </div>
      <div className={classnames({
        [styles.selected]: isSelected,
        [styles.starsText]: true
      })}
      >
        {(stars || 0) + bias}
      </div>
    </div>
  );
};


// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}


export default Upvote;
