import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ id, checked, changeFn, children }) => (
  <>
    <label className={styles.radioLabel} >
      <input
        id={id}
        checked={checked}
        type="radio"
        className={styles.radio}
        onChange={changeFn}
      />
      {children}
    </label>
  </>
);

export default Radio;