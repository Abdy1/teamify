import React from 'react';
import styles from './Form.module.css'; 

function Form() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Enter Your Email <span className={styles.required}>*</span></label>
        <input type="email" id="email" placeholder="Email Here" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">Enter Your Password <span className={styles.required}>*</span></label>
        <input type="password" id="password" placeholder="Password Here" />
        <a href="#" className={styles.forgotPassword}>Forgot password</a>
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

export default Form;
