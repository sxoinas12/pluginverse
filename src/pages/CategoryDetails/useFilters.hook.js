import { useState, useEffect, useCallback } from 'react';

import { getListInput } from '../../components/SimilarSection/component';
// eslint-disable-next-line import/prefer-default-export
export const useFilters = ({ subCategoryData, designTools, category }) => {
  const [filters, setFilters] = useState({});
  const [componentPlugins, setComponentsPlugins] = useState([]);

  useEffect(() => {
    const selected = [];
    Object.keys(filters).forEach(key => {
      if (filters[key].isSelected) {
        selected.push(key);
      }
    });
    if (selected.length !== 0) {
      const plugins = (category.plugins || []).filter(plugin => {
        const subTools = plugin.tools.map(tool => tool.name);
        return selected.every(val => subTools.includes(val));
      });
      setComponentsPlugins(getListInput(plugins));
    } else {
      setComponentsPlugins(getListInput(category.plugins || []));
    }
  }, [filters, category]);


  useEffect(() => {
    const initialFilters = {};
    if (designTools) {
      designTools.forEach((item) => {
        initialFilters[item.key] = {
          isSelected: false,
          ...item
        };
      });
      setFilters(initialFilters);
    }
  }, [designTools]);

  const handleCheck = useCallback((isChecked, item) => {
    const obj = {
      ...filters,
      [item.key]: {
        ...item,
        isSelected: isChecked
      }
    };
    setFilters({ ...obj });
  }, [filters]);


  useEffect(() => {
    if (subCategoryData && subCategoryData.tool && designTools) {
      const selectedToolValue = subCategoryData.tool;
      if (selectedToolValue) {
        // keep 2 == here please or make other places consistent :P
        const [selectedItem] = designTools.filter(tool => tool.value == selectedToolValue);
        handleCheck(true, selectedItem)
      }
    }
  }, [subCategoryData, designTools]);
  return {
    filters,
    handleCheck,
    componentPlugins
  };
};
