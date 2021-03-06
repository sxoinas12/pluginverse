import React from 'react';
import PropTypes from 'prop-types';

import Section from '@components/Section';
import List from '@components/List';
import BaseCard from '../BaseCard';
import styles from './styles.module.less';


export const getListInput = (plugins) => {
  return plugins.map((item) => {
    const tools = {};
    if (item.tools) {
      for (let i = 0; i < item.tools.length; i += 1) {
        tools[item.tools[i].name] = 1;
      }
    }
    return {
      author: (item.author && item.author.name),
      header: item.name,
      description: item.description,
      avatar: item.icon && item.icon.length > 0 ? (item.icon && global.API_URL + item.icon.url) : null,
      tools,
      id: item.id,
      image: { // need to pass images[0] when we fix graphQL bug
        url: 'https://strapi.bappy.tech/uploads/ca54d9bd4b0c48de91fd06ef9fb74690.png?294960.89500000014'
      },
      stars: item.stars || 0
    };
  });
};

const SimilarSection = ({
  title, subtitle, data, size, extra
}) => {
  if (!data || data.length == 0) return '';
  return (
    <div className={styles.section}>
      <Section title={title} subtitle={subtitle} extra={extra}>
        <List
          size={size}
          base={BaseCard}
          linkPrefix={(c) => `/plugin/${c.id}`}
          data={getListInput(data).slice(0,4)}
        />
      </Section>
    </div>
  );
};


SimilarSection.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  extra: PropTypes.oneOf(PropTypes.string, PropTypes.node),
  data: PropTypes.arrayOf(PropTypes.shape({}))
};

SimilarSection.defaultProps = {
  size: 3,
  title: 'Similar Section',
  subtitle: 'Subtitle',
  extra: '',
  data: [
    {
      author: { name: 'Author 1' },
      name: 'Header 1',
      icon: { url: '' },
      description: 'description lorem ipsum 1',
      id: 1314,
      tools: [{
        name: 'figma'
      }]
    },
    {
      author: { name: 'Author 2' },
      name: 'Header 2',
      icon: { url: '' },
      description: 'description lorem ipsum 2',
      id: 1314,
      tools: [{
        name: 'adobexd'
      }]
    },
    {
      author: { name: 'Author 3' },
      name: 'Header 3',
      icon: { url: '' },
      description: 'description lorem ipsum 3',
      id: 1314,
      tools: [{
        name: 'sketch'
      }]
    }
  ]
};

export default SimilarSection;
