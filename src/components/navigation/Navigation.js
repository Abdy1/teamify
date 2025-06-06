import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';  
function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      <div className={styles.links}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#features" className={styles.link}>Features</a>
        <a href="#about" className={styles.link}>About Us</a>
        <a href="#contact" className={styles.link}>Contact Us</a>
      </div>
      
      <div className={styles.signIn}>
        <Link to="/form">
          <button className={styles.signInButton}>Sign In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
