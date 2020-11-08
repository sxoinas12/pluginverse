import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null)
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};

export default useOutsideClick;