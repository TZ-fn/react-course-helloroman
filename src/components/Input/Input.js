import React from 'react';
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({ tag: Tag, name, label, maxLength, ...props }) => (
  <div className={styles.formItem}>

    <Tag
      type='text'
      name={name}
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      maxLength={maxLength}
      placeholder=' '
      // required
      {...props}
    />

    <label
      htmlFor={name}
      className={styles.label}
    >
      {label}
    </label>

  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;