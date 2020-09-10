import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './List.module.scss';

const List = (props) => (

  <ul className={styles.wrapper}>

    {props.items.map((account) => (
      <ListItem
        key={account.name}
        {...account}
      />
    ))}

  </ul>

);

export default List;