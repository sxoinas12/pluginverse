import React from 'react';

import styles from './styles.module.less';
import Frame from '../Frame';

export const NewsletterInput = () => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // send mail
  function sendMail() {
    if (!validateEmail(email)) {
      setSent(-1);
      return;
    }
    const url = `${global.API_URL}/newsletters`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then(() => setSent(true)).catch(() => setSent(-1));
  }

  return (
    <>
      {sent === true ? (
        <div className={styles.successContainer}>
          <img src={require('@assets/icons/success-double-mark.svg')} />
          <span className={styles.success}>Thank you for subscribing, designaut!</span>
        </div>
      )
        : (
          <div className={styles.newsletterInput}>
            <input type="text" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={() => sendMail()}>Join our newsletter</button>
          </div>
        )}
      {sent === -1 && (
      <div className={styles.errorContainer}>
        <img src={require('@assets/icons/error-exclamation-mark.svg')} />
        <span className={styles.error}>Invalid email address. Retry please!</span>
      </div>
      )}
    </>
  );
};

const Newsletter = () => {
  return (
    <Frame styling={styles.frame} title="Want to learn about new plugins ahead of the rest?" subtitle="We will only send you amazing news.">
      <NewsletterInput />
    </Frame>
  );
};

export default Newsletter;
