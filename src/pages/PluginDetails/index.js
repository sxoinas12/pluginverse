import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Row, Col } from 'react-grid-system';

import { Link, withRouter } from 'react-router-dom';

import Breadcrumb from '@components/Breadcrumb';
import Frame from '@components/Frame';
import Chip from '@components/Chip';
import Download from '@components/Download';
import FeatureBar from '@components/FeatureBar';
import List from '@components/List';

import styles from './styles.module.less';

const GET_DOCS = (id) => gql`query{
    plugin (id:${id}) {
      id,
      name,
      description,
      stars,
      icon {
        url
      },
      author{
        name,
        icon{ url }
      },
      categories {
        id,
        name
      },
      links{
        id,
        link,
        tool{
          name,
          icon { url }
        }
      },
      tools{
        id,
        name,
        icon { url }
      },
      similars{
        id,
        name,
        description,
        stars,
        icon {
          url
        },
        categories {
          id,
          name
        },
        links {
          id,
          link,
          tool{
            name,
            icon { url }
          }
        },
        tools {
          id,
          name,
          icon { url }
        },
        author{
          name,
          icon{
            url
          }
        }
      }
    }

}`;

export default withRouter((props) => {
  const id = parseInt(props.match.params.id || '1');
  const { loading, error, data } = useQuery(GET_DOCS(id));

  if (loading) return 'Loading...';

  // console.log(id, loading, error, data);
  const { plugin } = data;

  console.log('PluginDetails:', plugin);
  if (!plugin)
    return 'No plugin';

  return (
    <Row>
      <Col>
        <div className={styles.container}>
          <Row>
            <Col s={6}>
              <Breadcrumb>
                <Link to="/">Home</Link>
                <span>{plugin.name || 'Test Plugin'}</span>
              </Breadcrumb>
            </Col>
            <Col s={6}>
              <div className={styles.availableTools}>
                <span>Available in:</span>
                <span>
                  {plugin.tools.map((tool) => <img src={global.API_URL + tool.icon.url} alt="Figma" />)}
                </span>
              </div>
            </Col>
          </Row>
          <div className={styles.box}>
            <div className={styles.starsCounter}>
              <img src={require('@assets/icons/stars-arrow-top.svg')} />
              <span>{plugin.stars || '0'}</span>
            </div>
            <div className={styles.headerStyle}>
              {plugin.name}
            </div>
            <div className={styles.chips}>
              <Chip />
            </div>
            <div className={styles.author}>
              <img src={global.API_URL + (plugin.author.icon && plugin.author.icon.url)}/>
              <span>
                by
                {plugin.author.name}
              </span>
            </div>
            <div className={styles.description}>
              <p>{plugin.description}</p>
            </div>
            <div className={styles.links}>
              {plugin.links.map((item, index) => <Download key={index} link={item}/>)}
            </div>
          </div>

          <FeatureBar />

          <List data={plugin.similars.map((item) => {
            let tools = {};
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
          })} />
        </div>
      </Col>
    </Row>
  );
});
