import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input'

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add a new twitter account</h2>
    <form autoComplete='off' onSubmit={submitFn} className={styles.form}>
      <Input
        name='name'
        label='Name'
        maxLength={40}
      />

      <Input
        name='link'
        label='Twitter link'
        maxLength={40}
      />

      <Input
        name='image'
        label='Image'
        maxLength={40}
      />

      <Input
        tag='textarea'
        name='description'
        label='Description'
      />

      <button type='submit' className={styles.button}>Add a new item</button>
    </form>
  </div>
);

export default Form;