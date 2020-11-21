import React, { useState, useCallback } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './styles.module.less';

const BaseModal = ({
  beforeClose,
  children,
  renderTrigger,
  style,
  modalBody,
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

  const ref = useOutsideClick(isOpen, close);
  const Modal = (
    <div style={style} className={styles.baseModal}>
      <div ref={ref} style={modalBody} className={styles.modalBody}>
        {children && children({ ...rest, close })}
      </div>
    </div>
  );

  return (
    <>
      {renderTrigger(open)}
      {isOpen ? Modal : null}
    </>
  );
};

export default BaseModal;
