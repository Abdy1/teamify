import React from 'react';
import styles from './Home.module.css'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles['home-container']}>
      <div className={styles['welcome-text']}>
        <h1 className={styles['welcome-title']}>Welcome to Your</h1>
        <h2 className={styles['virtual-office']}>Virtual Office</h2>
      </div>
      <div className={styles['cta-buttons']}>
        <button className={styles['instant-demo']}>Instant Demo</button>
        <Link to="/pricing">
          <button className={styles['setup-company']}>Pricing</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
