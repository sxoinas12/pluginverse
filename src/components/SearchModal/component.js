import React, { useCallback, useState } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-grid-system';
import BaseModal from '../BaseModal';
import styles from './styles.module.less';

const newLocal = 'fixed';
const internalStyle = {
  width: '100%',
  height: '100%',
  position: newLocal,
  top: 0,
  left: 0,
  background: '#443E56',
  opacity: 1
};


const SearchModal = () => {
  const [query, setQuery] = useState('');
  const handleSearch = useCallback(e => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  }, [setQuery]);

  // TODO search Query must perform 2 requests
  // 1 to Plugins & 1 to categories

  return (
    <BaseModal
      modalBody={internalStyle}
      renderTrigger={open => <button onClick={open}>Search</button>}
    >
      {
            ({ close }) => (
              <Container>
                <Row>
                  <Col>
                    <div className={styles.searchContainer}>
                      <div className={styles.searchIconContainer}>
                        <img src={require('@assets/icons/modal-search.svg')} alt="Search Icon" />
                      </div>
                      <div className={styles.searchInputContainer}>
                        <input value={query} onChange={handleSearch} className={styles.box} placeholder="Search categories or plugins" label="Search" />
                      </div>
                      <div role="button" onClick={close} className={styles.closeButton}>
                        <img src={require('@assets/icons/modal-close-icon.svg')} alt="" />
                        <div>Close</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>Categories</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>Plugins</div>
                  </Col>
                </Row>
              </Container>
            )
        }

    </BaseModal>
  );
};

export default SearchModal;
