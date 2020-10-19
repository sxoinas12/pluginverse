import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import List from '@components/List';
import SimilarSection from '@components/SimilarSection';
import BaseLoader from '@components/BaseLoader';
import Upvote from './components/upvote/component';
import DownloadButtons from './components/DownloadButtons';
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
  const { loading, data } = useQuery(GET_DOCS(id));

  if (loading) {
    return (
      <BaseLoader isLoading={loading} />
    );
  }

  const { plugin } = data;

  if (!plugin) return 'No plugin';

  return (
    <Row>
      <Col>
        <div className={styles.container}>
          <Row>
            <Col xs={12} md={6}>
              <Breadcrumb>
                <Link to="/">Home</Link>
                <span>{plugin.name || 'Test Plugin'}</span>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className={styles.box}>
            <Col xs={6}>
              <Row>
                <Col xs={12} className={styles.headerStyle}>
                  <div>
                    <img src={require('@assets/images/visual-eyes.svg')} alt="" />
                  </div>
                  <div>{plugin.name}</div>
                </Col>
              </Row>
              <Row>
                <Col className={styles.chipsContainer}>
                  {(plugin.categories || []).map((category, _) => {
                    return (
                      <div className={styles.categoryChip} key={category.id}>{category.name}</div>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col className={styles.author}>
                  <span>
                    by
                    {' '}
                    {plugin.author ? plugin.author.name : ''}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Upvote stars={plugin.stars} />
                </Col>
              </Row>
              <DownloadButtons tools={plugin.tools} links={plugin.links} />
              <Row>
                <Col>
                  <div className={styles.description}>
                    <p>
                      {plugin.description}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.similarSectionContainer}>
            <Col xs={12}>
              <SimilarSection title="Similar plugins" subtitle="" data={plugin.similars} size={3} />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
});
