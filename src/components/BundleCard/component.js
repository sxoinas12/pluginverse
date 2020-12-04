import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@components/Badge';
import styles from './styles.module.less';

const BundleCard = ({ bundle, onClick }) => {
  return (
    <div className={styles.bundleCard} onClick={() => onClick && onClick(bundle)} style={onClick ? {cursor:"pointer"} : {}}>
      <div className={styles.bundleContainer}>
        <div className={styles.bundleName}>{bundle.name}</div>
        <div className={styles.toolContainer}>
          {bundle.tools.map((tool, index) => {
            return <Badge key={index} tool={tool.name} text={`For ${tool.name}`} />
          })}
        </div>
      </div>
      <div className={styles.bundleIcon}>
        <img src={ (bundle.image && bundle.image.url) ? '/api' + bundle.image.url : require('@assets/icons/bundle.svg')} alt="" />
      </div>
    </div>
  );
};

BundleCard.propTypes = {
  bundle: PropTypes.shape({
    name: PropTypes.string
  })
};

export default BundleCard;
