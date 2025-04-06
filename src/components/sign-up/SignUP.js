import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './SignUp.module.css';

function SignUp() {
  const navigate = useNavigate(); 

  const handleContinue = (e) => {
    e.preventDefault();  
    navigate('/csign-up'); 
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>Set Up Your Office</h1>

      <div className={styles.imageContainer}>
        <span className={styles.imagePlaceholder}>+</span>
      </div>

      <form onSubmit={handleContinue}>
        <div className={styles.inputContainer}>
          <label htmlFor="fullName">
            Enter Your Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="First & Last Name"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email">
            Enter Your Email <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Here"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="companyName">
            Your Company Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Company Name Here"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="companyWebsite">
            Your Company Website <span className={styles.required}>*</span>
          </label>
          <input
            type="url"
            id="companyWebsite"
            placeholder="Website Here"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="companySize">
            Choose Your Company Size <span className={styles.required}>*</span>
          </label>
          <select
            id="companySize"
            className={styles.inputField}
            required
          >
            <option value="" disabled selected>Select Company Size</option>
            <option value="small">1-50 Employees</option>
            <option value="medium">51-200 Employees</option>
            <option value="large">201+ Employees</option>
          </select>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password">
            Create Password <span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type Password"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword">
            Confirm Password <span className={styles.required}>*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={styles.inputField}
            required
          />
        </div>

        <button className={styles.continueButton}>Continue</button>
      </form>
    </div>
  );
}

export default SignUp;
