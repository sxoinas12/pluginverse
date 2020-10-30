import { useState, useEffect, useCallback } from 'react';


// eslint-disable-next-line import/prefer-default-export
export const useFilters = ({ subCategoryData, designTools }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const initialFilters = {};
    designTools.forEach((item) => {
      initialFilters[item.key] = {
        isSelected: false,
        ...item
      };
    });
    setFilters(initialFilters);
  }, [designTools]);

  useEffect(() => {
    if (subCategoryData && Object.keys(filters).length > 0) {
      // TODO init data based on selected tool
      const selectedToolValue = subCategoryData.tool;
      if (!selectedToolValue) {
        return
      }
      const [selectedItem] = Object.keys(filters).filter(filt => filt.value === selectedToolValue)
      const obj = {
        ...filters,
        [selectedItem.key]: {
          ...selectedItem,
          isSelected: true
        }
      };
      setFilters({ ...obj });
    }
  }, [subCategoryData, filters]);
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


  return {
    filters,
    handleCheck
  };
};
