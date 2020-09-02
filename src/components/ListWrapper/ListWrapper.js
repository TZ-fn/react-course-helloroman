import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (

  <ul className='listWrapper__wrapper'>

    {props.items.map((account) => (
      <ListItem
        key={account.name}
        {...account}
      />
    ))}

  </ul>

);

export default ListWrapper;