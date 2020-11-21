/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.less';
import BaseCheckbox from '@components/BaseCheckbox';

const ToolFilter = ({ onFilter }) => {
    const [filters, setFilters] = React.useState({
        figma: true,
        sketch: true,
        adobexd: true
    });
    const toggle = (name,v) => {
        v ? filters[name] = true: delete filters[name];
        setFilters(filters);
        onFilter && onFilter(Object.keys(filters));
    };

    return <div>
      <div className={styles.toolWrapper}>
            <BaseCheckbox handleClick={(v) => toggle('figma',v)}/>
            <div className={styles.toolHeader}>Figma</div>
        </div>
        <div className={styles.toolWrapper}>
            <BaseCheckbox handleClick={(v) => toggle('sketch',v)}/>
            <div className={styles.toolHeader}>Sketch</div>
        </div>
        <div className={styles.toolWrapper}>
            <BaseCheckbox handleClick={(v) => toggle('adobexd',v)}/>
            <div className={styles.toolHeader}>Adobe</div>
        </div>
    </div>;
};

ToolFilter.propTypes = {
    onFilter: PropTypes.array
};

export default ToolFilter;
