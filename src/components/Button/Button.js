import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ children, href, secondary, ...props }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      {
        href ? (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={href}
            className={buttonClass}
          >
            {children}
          </a>
        ) : (
            <button className={buttonClass} {...props}>
              {children}
            </button>
          )
      }
    </>
  )
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  secondary: PropTypes.bool,
}

Button.defaultProps = {
  secondary: false,
}

export default Button;