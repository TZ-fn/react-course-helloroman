import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const ListItem = ({
  name,
  image,
  description,
  twitterLink
}) => (
    <li className={styles.wrapper}>
      <img
        alt={name}
        src={image || 'https://picsum.photos/200'}
        className={styles.image}
      />

      <div>
        <h2 className={styles.name}>
          {name}
        </h2>

        <p className={styles.description}>
          {description}
        </p>

        <Button href={twitterLink}>
          visit twitter page
        </Button>

      </div>
    </li>
  );

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: null,
}

export default ListItem;