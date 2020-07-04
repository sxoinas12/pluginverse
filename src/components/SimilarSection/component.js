import React from 'react';
import PropTypes from 'prop-types';

import Section from '@components/Section';
import List from '@components/List';

import styles from './styles.module.less';

const SimilarSection = ({ title, subtitle, data }) => (
  <div className={styles.section}>
    <Section title={title} subtitle={subtitle}>
      <List data={data.map((item) => {
        const tools = {};
        if (item.tools) {
          for (let i = 0; i < item.tools.length; i += 1) {
            tools[item.tools.name] = 1;
          }
        }
        return {
          author: (item.author && item.author.name),
          header: item.name,
          description: item.description,
          avatar: (item.icon && global.API_URL + item.icon.url),
          tools
        };
      })}
      />
    </Section>
  </div>
);


SimilarSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({}))
};

SimilarSection.defaultProps = {
  title: 'Similar Section',
  subtitle: 'Subtitle',
  data: [
    {
      author: { name: 'Author 1' },
      name: 'Header 1',
      icon: { url: '' },
      description: 'description lorem ipsum 1',
      tools: [{
        name: 'figma'
      }]
    },
    {
      author: { name: 'Author 2' },
      name: 'Header 2',
      icon: { url: '' },
      description: 'description lorem ipsum 2',
      tools: [{
        name: 'adobexd'
      }]
    },
    {
      author: { name: 'Author 3' },
      name: 'Header 3',
      icon: { url: '' },
      description: 'description lorem ipsum 3',
      tools: [{
        name: 'sketch'
      }]
    }
  ]
};

export default SimilarSection;
