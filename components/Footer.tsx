import React from 'react';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href='https://github.com/akiratoma/vapingbenchmark-frontend'>
        <img src='/github.png' />
      </a>
    </div>
  );
};

export default Footer;
