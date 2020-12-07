import React, { useState, useCallback } from 'react';
import { Row, Col } from 'react-grid-system';
import BaseInput from '@components/BaseInput';
import BaseTextArea from '@components/BaseTextArea';
import Dropdown from '@components/Dropdown';
import { Primary0, black } from '@styles/variables.js';
import styles from './styles.module.less';

const dropdownOptions = [
  {
    key: 'plugin',
    value: 'submit your plugin'
  },
  {
    key: 'contact',
    value: 'contact us'
  }
];

const dropdownStyles = {
  borderColor: Primary0,
  width: '280px',
  margin: 0,
  padding: '8px',
  backgroundImage: 'url("/assets/icons/arrow-down-black.svg")'
};

const selectedDropdown = {
  color: black
};

const ContactForm = ({
  onSubmited
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [validator, setValidator] = useState({
    email: true
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailReg.test(formData.email)) {
      setValidator(prevState => ({
        ...prevState,
        email: true
      }));
      const url = `${global.API_URL}/contacts`;
      window.fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(() => {
          setSent(true);
          onSubmited(true);
        })
        .catch(() => setSent(false));
    } else {
      setValidator(prevState => ({
        ...prevState,
        email: false
      }));
    }
  }, [formData]);

  const handleChange = useCallback(item => {
    const { name, value } = item;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }, [formData, setFormData]);
  if (sent) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col className={styles.inputContainer}>
          <BaseInput
            value={formData.name}
            label="Your email"
            type="email"
            isValid={validator.email}
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.inputContainer}>
          <BaseInput
            name="name"
            value={formData.name}
            label="Your name"
            type="name"
            isValid
            placeholder="Konstantinos"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.dropdownContainer}>
          <div className={styles.dropdownLabel}>Subject</div>
          <Dropdown
            style={{
              ...dropdownStyles,
              ...(formData.subject ? selectedDropdown : {})
            }}
            className={styles.dropdown}
            placeholder="Placeholder Text"
            options={dropdownOptions}
            value={formData.subject}
            onSelect={selected => handleChange({ value: selected, name: 'subject' })}
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.textContainer}>
          <BaseTextArea
            value={formData.message}
            label="Your Message"
            placeholder="Give us your feedback"
            name="message"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input className={styles.submitButton} type="submit" value="Send" />
        </Col>
      </Row>
      {!validator.email ? (
        <Row>
          <Col className={styles.bottomErrorContainer}>
            <img src={require('@assets/icons/input-error.svg')} alt="Invalid" />
            <div className={styles.errorText}>There was an error. Please retry!</div>
          </Col>
        </Row>
      ) : null}
    </form>
  );
};

export default ContactForm;
