import React, { useState, useCallback } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './styles.module.less';

const BaseModal = ({
  beforeClose,
  children,
  renderTrigger,
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true));

  const close = useCallback(() => {
    if (beforeClose) {
      beforeClose();
    }
    setOpen(false);
  }, [beforeClose]);

  const ref = useOutsideClick(close);

  const Modal = (
    <div ref={ref}>
      {children && children(close)}
    </div>
  );

  return (
    <div className={styles.baseModal}>
      {renderTrigger(open)}
      {isOpen ? React.cloneElement(Modal, { close, ...rest }) : null}
    </div>
  );
};

export default BaseModal;
