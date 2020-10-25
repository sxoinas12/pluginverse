import React from 'react';

import styles from './styles.module.less';
import Frame from '../Frame';

const Newsletter = () => {
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
    let url = global.API_URL + "/newsletters";
    fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email })
    }).then(() => setSent(true)).catch(() => setSent(-1));
  }

  return (
    <Frame>
      {sent === true ? <span className={styles.success}>You stay informed!</span>
        : (
        <div className={styles.newsletterInput}>
            <input type="text" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={() => sendMail()}>Join our newsletter</button>
        </div>
        )}
      {sent === -1 && <span className={styles.error}>Type a valid email and try again!</span>}
    </Frame>
  );
};

export default Newsletter;
