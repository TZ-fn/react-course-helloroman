import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';

const ListWrapper = (props) => (

  <ul className={styles.wrapper}>

    {props.items.map((account) => (
      <ListItem
        key={account.name}
        {...account}
      />
    ))}

  </ul>

);

export default ListWrapper;