import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title'

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add a new twitter account</Title>
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

      <Button>Add a new item</Button>
    </form>
  </div>
);

export default Form;