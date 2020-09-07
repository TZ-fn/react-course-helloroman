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
        tag='text-area'
        name='description'
        label='Description'
      />

      {/* <div className={styles.formItem}>
        <input type='text' placeholder='Name' name='name' className={styles.input} required />
        <label htmlFor='name' className={styles.label}>Name</label>
      </div>

      <div className={styles.formItem}>
        <input type='text' placeholder='Link' name='link' className={styles.input} required />
        <label htmlFor='link' className={styles.label}>Link</label>
      </div>

      <div className={styles.formItem}>
        <input type='text' placeholder='Image' name='image' className={styles.input} />
        <label htmlFor='image' className={styles.label}>Image</label>
      </div>

      <div className={styles.formItem}>
        <textarea placeholder='Description' name='description' className={styles.textarea} required />
        <label htmlFor='description' className={styles.label}>Description</label>
      </div> */}

      <button type='submit' className={styles.button}>Add a new item</button>
    </form>
  </div>
);

export default Form;