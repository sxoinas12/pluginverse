import React from 'react';
import { css } from '@emotion/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DotLoader } from 'react-spinners';
import { Row, Col } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import List from '@components/List';
import Upvote from './components/Upvote/component';
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
  const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-color: red;
`;

  if (loading) {
    return (
      <DotLoader
        css={override}
        size={150}
        color="#9285B8"
        loading={loading}
      />
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

          <List data={plugin.similars.map((item) => {
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
              avatar: (item.icon && global.API_URL + item.icon.url),
              tools,
              image: { // need to pass images[0] when we fix graphQL bug
                url: 'https://strapi.bappy.tech/uploads/ca54d9bd4b0c48de91fd06ef9fb74690.png?294960.89500000014'
              }
            };
          })}
          />
        </div>
      </Col>
    </Row>
  );
});
