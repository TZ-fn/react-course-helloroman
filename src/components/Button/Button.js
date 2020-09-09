import React from 'react';
import styles from './Button.module.scss'

const Button = ({ children, href }) => (
  <>
    {
      href ? (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={href}
          className={styles.button}
        >
          {children}
        </a>
      ) : (
          <button className={styles.button}>
            {children}
          </button>
        )
    }
  </>
);

export default Button;