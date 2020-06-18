import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Row, Col } from 'react-grid-system';

import { Link, withRouter } from 'react-router-dom';

import Breadcrumb from '@components/Breadcrumb';
import Frame from '@components/Frame';
import Chip from '@components/Chip';
import Download from '@components/Download';
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
        icon{url}
      },
      categories {
        id,
        name
      },
      links{
        id,
        link,
        tool{
          name
        }
      },
      tools{
        id,
        name
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
        links{
          id,
          link,
          tool{
            name
          }
        },
        tools{
          id,
          name
        },
        author{
          name,
          icon{url}
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
		          	<span>Adobe</span>
		          </div>
        		</Col>
        	</Row>
          <div className={styles.box}>
            <div className={styles.headerStyle}>
              {plugin.name}
            </div>
            <div className={styles.chips}>
              <Chip />
            </div>
            <div className={styles.author}>
              <img src={'https://strapi.bappy.tech'+plugin.author.icon.url}/>
              <span>
                by {plugin.author.name}
              </span>
            </div>
            <div className={styles.description}>
              <p>{plugin.description}</p>
            </div>
            <div className={styles.links}>
              {plugin.links.map((item, index) => <Download key={index} link={item}/>)}
            </div>
	        </div>
	        <List data={plugin.similars}/>
        </div>
      </Col>
    </Row>
  );
});
