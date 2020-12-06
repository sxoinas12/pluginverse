import React from 'react';

import { Container, Row, Col } from 'react-grid-system';
import styles from './styles.module.less';
const Error404 = () => {

    return <div className={styles.container}>
        <img className={styles.rocket} src={require('@assets/images/rocket.svg')} />
        <div className={styles.innerContainer}>
            <Row>
                <Col>
                    <img src={require('@assets/logo.svg')} />
                </Col>
            </Row>
            <Row>
                <Col className={styles.message}>
                    <div className={styles.error}>404</div>
                    <div className={styles.title}>You ventured way too far!</div>
                    <div className={styles.subtitle}>We couldn’t find the page you are looking for.</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.callToAction}>
                        <a href='/'>
                            <span className={styles.backButton}>Go to homepage</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}

export default Error404;