import Link from 'next/link';
import React from 'react';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <h1 style={{ cursor: 'pointer' }}>VAPING BENCHMARK</h1>
      </Link>
    </div>
  );
};

export default Header;
