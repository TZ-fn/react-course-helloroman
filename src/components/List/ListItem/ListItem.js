import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Title from '../../Title/Title'

const ListItem = ({
  title,
  description,
  link,
  image,
  formType,
}) => {

  return (
    <li className={styles.wrapper}>

      {image && <img
        src={image || 'https://unsplash.it/200/200'}
        className={styles.image}
        alt={title}
      />}

      <div>
        <Title>
          {title}
        </Title>

        <p className={styles.description}>
          {description}
        </p>

        {link &&
          <Button href={link}>
            visit {formType} page
        </Button>}

      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
};

ListItem.defaultProps = {
  link: null,
}

export default ListItem;