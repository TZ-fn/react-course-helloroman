import React from 'react';
import './Form.css';

const Form = ({ submitFn }) => (
  <form onSubmit={submitFn} className='form__wrapper'>
    <input type="text" placeholder="Name" name="name" className='form__input' />
    <input type="text" placeholder="Link" name="link" className='form__input' />
    <input type="text" placeholder="Image" name="image" className='form__input' />
    <textarea placeholder="Description" name="description" className='form__textarea' />
    <button type="submit" className='form__button'>Add a new item</button>
  </form>
);

export default Form;