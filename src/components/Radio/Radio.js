import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ id, checked, changeFn, children }) => (
  <>
    <input
      id={id}
      checked={checked}
      type="radio"
      className={styles.radio}
      onChange={changeFn}
    />
    <label
      htmlFor={id}
      className={styles.radioLabel}
    >
      {children}
    </label>
  </>
);

export default Radio;