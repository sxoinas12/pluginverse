import React from 'react';

import styles from './styles.module.less';
import Frame from '../Frame';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  // send mail
  function sendMail() {

  }

  return (
    <Frame>
      <div className={styles.newsletterInput}>
        <input type="text" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={() => sendMail()}>Join our newsletter</button>
      </div>
    </Frame>
  );
};

export default Newsletter;
