import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import styles from './styles.module.less';


const BaseDropdown = ({
  data,
  defaultTitle,
  onSelect,
  renderTrigger
}) => {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true));
  const close = useCallback(() => setOpen(false));

  const handleSelect = (item) => useCallback(() => {
    if (onSelect) {
      onSelect(item);
    }
    close();
  });

  return (
    <>
    { isOpen ? (
      <Row>
        <Col xs={12} className={styles.baseDropdown}>
          <Row>
            <Col>
              <div role="button" onClick={open}>{defaultTitle}</div>
            </Col>
          </Row>
          <Row>
            <Col className={styles.children}>
              {(data || []).map((item, index) => {
                return (
                  <div className={styles.child} key={index} onClick={handleSelect(item)}>
                    {item.name}
                  </div>
                );
              })}
            </Col>
          </Row>
          )
        </Col>
      </Row>
      : (
        renderTrigger(open)
      )}
    </>
  );
};

export default BaseDropdown;
