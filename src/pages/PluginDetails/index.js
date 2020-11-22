import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col, Container } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import SimilarSection from '@components/SimilarSection';
import BaseLoader from '@components/BaseLoader';
import Divider from '@components/Divider';
import BaseModal from '@components/BaseModal'
import Upvote from './components/upvote/component';
import DownloadButtons from './components/DownloadButtons';
import styles from './styles.module.less';

const GET_DOCS = (id) => gql`query{
    plugin (id:${id}) {
      id,
      name,
      description,
      stars,
      images {
        url
      },
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
  // TODO set max Characters for description
  const firstSentence = new RegExp('^.{1000}.*?[\.!\?]');
  const stripped = plugin && plugin.description;// && plugin.description.replace(/<[^>]*>?/gm, '');
  const matched = stripped && stripped.match(firstSentence);
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={12} md={6}>
          <Breadcrumb>
            <Link to="/">Home</Link>
            <span>{plugin.name || 'Test Plugin'}</span>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className={styles.box}>
        <Col xs={8}>
          <Row>
            <Col xs={9} className={styles.headerStyle}>
              <div className={styles.iconContainer}>
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
              <Upvote stars={plugin.stars} id={plugin.id} />
            </Col>
          </Row>
          <Row>
            <Col xs={10} className={styles.downloadDivider} />
          </Row>
          <DownloadButtons tools={plugin.tools} links={plugin.links} />
          <Row>
            <Col xs={10} className={styles.downloadDivider} />
          </Row>
          <Row>
            <Col>
              <div className={styles.descriptionTitle}>Description</div>
              <div className={styles.description}>
                <div className={styles.paragraph} dangerouslySetInnerHTML={{__html:matched}}>
                
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <BaseModal
                renderTrigger={open =>  (
                  <div onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    open()
                  }} className={styles.readMore}>
                    Read More
                    <img src={require('@assets/icons/arrow-down-purple.svg')} alt="" />
                  </div>
                )}
              >
                { close => (
                  <div>
                    {plugin.description}dasdadadada
                  </div>
                )}
              </BaseModal>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          {plugin.images.length ? <img alt="" src={global.API_URL + plugin.images[0].url} className={styles.featureImage} /> : ''}
        </Col>
        <div className={styles.backgroundCircle} />
      </Row>
      <Row className={styles.similarSectionContainer}>
        <Col xs={12}>
          <SimilarSection title="Similar plugins" subtitle="" data={plugin.similars} size={4} />
        </Col>
      </Row>
    </Container>

  );
});
