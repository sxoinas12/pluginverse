import { useEffect, useRef } from 'react';

const useOutsideClick = (isOpen, callback) => {
  const ref = useRef(null);
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target) && isOpen) {
      callback(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, callback]);
  return ref;
};

export default useOutsideClick;
