import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Row, Col, Container } from 'react-grid-system';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumb from '@components/Breadcrumb';
import Chip from '@components/Chip';
import SimilarSection from '@components/SimilarSection';
import BaseLoader from '@components/BaseLoader';
import Divider from '@components/Divider';
import BaseModal from '@components/BaseModal'
import Upvote from './components/upvote/component';
import DownloadButtons from './components/DownloadButtons';
import classnames from 'classnames';
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

  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    setShowMore(!showMore);
  };

  const { loading, data } = useQuery(GET_DOCS(id));

  if (loading) {
    return (
      <BaseLoader isLoading={loading} />
    );
  }

  const { plugin } = data;
  if (!plugin) return 'No plugin';
  // TODO set max Characters for description

  const stripped = plugin && plugin.description;// && plugin.description.replace(/<[^>]*>?/gm, '');
  const firstSentence = /^.{450}[^.\!\?]*[.\!\?]/gms;
  const matched = stripped && stripped.match(firstSentence) && stripped.match(firstSentence)[0];
  let description = stripped;
  let more = false;
  if (stripped.length > 400) {
    description = matched;
    more = true;
  }

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
        <Col xs={12} sm={12} md={8} lg={7} className={styles.leftPanel}>
          <Row>
            <Col xs={12} className={styles.headerStyle}>
              {/* <div className={styles.iconContainer}>
                <img src={require('@assets/images/visual-eyes.svg')} alt="" />
              </div> */}
              <div>{plugin.name}</div>
            </Col>
            <Col xs={12} className={styles.chipsContainer}>
              {(plugin.categories || []).map((category, _) => 
                <div className={styles.chipHolder}>
                  <Chip text={category.name} url={`/category/${category.id}`}/>
                </div>)}
            </Col>
            <Col xs={12} className={styles.author}>
              <span>
                by
                {' '}
                {plugin.author ? plugin.author.name : ''}
              </span>
            </Col>
            <Col>
              <Upvote stars={plugin.stars} id={plugin.id} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={4} lg={5}>
          {plugin.images.length ? <img alt="" src={global.API_URL + plugin.images[0].url} className={styles.featureImage} /> : ''}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} lg={7}>
          <div className={styles.downloadDivider}></div>
          <DownloadButtons tools={plugin.tools} links={plugin.links} />
          <div className={styles.downloadDivider}></div>
          <Row>
            <Col>
              <div className={styles.descriptionTitle}>Description</div>
              <div className={showMore ? classnames([styles.description, styles.showMore]) : styles.description} >
                <div className={styles.paragraph} dangerouslySetInnerHTML={{__html: description}}>
                </div>
              </div>
            </Col>
          </Row>
          {more && <Row>
            <Col>
              <div className={styles.readMore} onClick={() => toggle()}>
                {showMore ? 'Read Less' : 'Read More'}
                {showMore ? <img src={require('@assets/icons/arrow-up-purple.svg')} alt="" /> : <img src={require('@assets/icons/arrow-down-purple.svg')} alt="" />}
              </div>
            </Col>
          </Row>}
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
