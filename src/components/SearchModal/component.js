import React, { useCallback, useState } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-grid-system';
import { debounce } from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import List from '@components/List';
import BaseModal from '../BaseModal';
import CategoryData from './components/CategoryData';
import { getListInput } from '../SimilarSection/component';
import CategoryPlaceholder from './components/CategoryPlaceholder';
import SEARCH_CATEGORY_BY_NAME from '../../graphql/categories/searchCategoryByName';
import SEARCH_PLUGIN_BY_NAME from '../../graphql/plugins/searchPluginsByName';
import PluginsPlaceholder from './components/PluginsPlaceholder';
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
  const [query, setQuery] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data } = useQuery(SEARCH_PLUGIN_BY_NAME(searchQuery));
  const catData = useQuery(SEARCH_CATEGORY_BY_NAME(searchQuery)).data;

  const searchData = useCallback(q => {
    setLoading(false);
    setSearchQuery(q);
  }, []);

  const searchHandler = useCallback(debounce(searchData, 1200), []);

  const handleSearch = useCallback(e => {

    const q = e.target.value;
    setQuery(q);
    setLoading(true);
    searchHandler(q);
  }, [setQuery]);
  return (
    <BaseModal
      modalBody={internalStyle}
      renderTrigger={open => <button onClick={open}>Search</button>}
    >
      {
            ({ close }) => (
              <Container>
                <Row>
                  <Col xs={12}>
                    <div className={styles.searchContainer}>
                      <div className={styles.searchIconContainer}>
                        <img src={require('@assets/icons/modal-search.svg')} alt="Search Icon" />
                      </div>
                      <div className={styles.searchInputContainer}>
                        <input value={query} onChange={handleSearch} className={styles.box} placeholder="Search categories or plugins" label="Search" />
                      </div>
                      <div role="button" onClick={close} className={styles.closeButton}>
                        <img alt="close icon" src={require('@assets/icons/modal-white-close-icon.svg')} alt="" />
                        <div>Close</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className={styles.categoriesContainer}>
                    <Row justify="start">
                      <Col xs={6} className={styles.title}>Categories</Col>
                    </Row>
                    { loading ? <CategoryPlaceholder /> : <CategoryData categories={(catData && catData.categories) || []} /> }
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className={styles.pluginsContainer}>
                    <Row justify="start">
                      <Col xs={6} className={styles.title}>Plugins</Col>
                    </Row>
                    {loading ? <PluginsPlaceholder /> : <List data={getListInput((data && data.plugins) || [])} linkPrefix={(c) => `/plugin/${c.id}`} size={4} />}
                  </Col>
                </Row>
              </Container>
            )
        }
    </BaseModal>
  );
};

export default SearchModal;
