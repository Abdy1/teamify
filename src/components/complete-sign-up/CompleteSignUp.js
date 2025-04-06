import React from 'react';
import styles from './CompleteSignUp.module.css'; 

function CompleteSignUp() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Enter Your Name <span className={styles.required}>*</span></label>
        <input type="text" id="name" placeholder="First & Last Name" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">Enter Your Email <span className={styles.required}>*</span></label>
        <input type="email" id="email" placeholder="Email Here" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="current-password">Current Password <span className={styles.required}>*</span></label>
        <input type="password" id="current-password" placeholder="Type password" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="confirm-password">Confirm Password <span className={styles.required}>*</span></label>
        <input type="password" id="confirm-password" placeholder="Confirm Password" />
      </div>

      <button className={styles.continueButton}>Continue</button>

      <div className={styles.signUp}>
        <span>Don't have an account? <a href="#">Sign Up</a></span>
      </div>

      <div className={styles.terms}>
        By proceeding you are agreeing to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

export default CompleteSignUp;
