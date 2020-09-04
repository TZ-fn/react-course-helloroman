import React from 'react';
import './Form.css';

const Form = ({ submitFn }) => (
  <div className="form__wrapper">
    <h2>Add a new twitter account</h2>
    <form onSubmit={submitFn} className='form__form'>

      <div className="form__form-item">
        <input type="text" placeholder="Name" name="name" className='form__input' />
        <label htmlFor="name" className="form__label">Name</label>
      </div>

      <div className="form__form-item">
        <input type="text" placeholder="Link" name="link" className='form__input' />
        <label htmlFor="link" className="form__label">Link</label>
      </div>

      <div className="form__form-item">
        <input type="text" placeholder="Image" name="image" className='form__input' />
        <label htmlFor="image" className="form__label">Image</label>
      </div>

      <div className="form__form-item">
        <textarea placeholder="Description" name="description" className='form__textarea' />
        <label htmlFor="description" className="form__label">Description</label>
      </div>

      <button type="submit" className='form__button'>Add a new item</button>
    </form>
  </div>
);

export default Form;