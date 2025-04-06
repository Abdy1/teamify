import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Pricing.module.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleSwitch = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchContainer}>
        <button
          className={`${styles.switchBtn} ${!isYearly && styles.selected}`}
          onClick={handleSwitch}
        >
          Monthly
        </button>
        <button
          className={`${styles.switchBtn} ${isYearly && styles.selected}`}
          onClick={handleSwitch}
        >
          Yearly
        </button>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Standard</h2>
          <p>{isYearly ? '$120/year' : '$10/month'}</p>
          <p className={styles.description}>
            The basic plan suitable for individuals and small teams.
          </p>
          <Link to="/summary?plan=standard"> 
            <button className={styles.chooseBtn}>Choose Plan</button>
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Premium</h2>
          <p>{isYearly ? '$240/year' : '$20/month'}</p>
          <p className={styles.description}>
            A popular plan for growing teams with additional features.
          </p>
          <Link to="/summary?plan=premium"> 
            <button className={styles.chooseBtn}>Choose Plan</button>
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Enterprise</h2>
          <p>{isYearly ? '$480/year' : '$40/month'}</p>
          <p className={styles.description}>
            Advanced tools and priority support for large teams.
          </p>
          <Link to="/summary?plan=enterprise"> 
            <button className={styles.chooseBtn}>Choose Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
