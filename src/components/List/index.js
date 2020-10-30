import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';
import BaseCard from '../BaseCard';
import styles from './styles.module.less';

const List = (props) => {
  const {
    scrollable,
    size,
    base,
    data,
    linkPrefix
  } = props;
  const Base = base;
  const [start, setStart] = useState(0);
  const array = scrollable ? data.slice(start, start + size) : data;
  return (
    <Row className={styles.row}>
      {array.map((card, i) => (
        <Col xs={12} sm={6} md={4} lg={12 / size} xl={12 / size} className={styles.col} key={card._key || i}>
          {linkPrefix
            ? (
              <a className={styles.link} href={linkPrefix(card)}>
                <div className={styles.content}>
                  <Base {...card} />
                </div>
              </a>
            )
            : (
              <div className={styles.content}>
                <Base {...card} />
              </div>
            )}
        </Col>
      ))}
      {scrollable && (data.length - size > start) && <img src={require('@assets/icons/right.svg')} className={styles.next} onClick={() => setStart(start + size)} />}
      {scrollable && (start > 0) && <img src={require('@assets/icons/left.svg')} className={styles.prev} onClick={() => setStart(start - size < 0 ? 0 : start - size)} />}
    </Row>
  );
};


List.propTypes = {
  base: PropTypes.func,
  scrollable: PropTypes.bool,
  size: PropTypes.number,
  linkPrefix: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    tools: PropTypes.shape({}),
    avatar: PropTypes.string,
    stars: PropTypes.number
  }))
};

List.defaultProps = {
  base: BaseCard,
  scrollable: false,
  size: 3,
  linkPrefix: undefined,
  data: []
};

export default List;
