import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types'

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

        <a
          target='_blank'
          rel='noopener noreferrer'
          href={twitterLink}
          className={styles.button}>
          visit twitter page
        </a>
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