import React from 'react';

const Form = ({ submitFn }) => (
  <form onSubmit={submitFn}>
    <input type="text" placeholder="name" name="name" />
    <input type="text" placeholder="link" name="link" />
    <input type="text" placeholder="image" name="image" />
    <textarea placeholder="description" name="description" />
    <button type="submit">add new item</button>
  </form>
);

export default Form;