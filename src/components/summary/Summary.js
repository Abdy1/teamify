import React from 'react';
import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className={styles.fullWidthSummary}>
      <h3>Premium Plan</h3>
      <p>
        A popular plan for growing teams with additional features. Offers more flexibility and enhanced tools.
      </p>
      <p><strong>Price:</strong> $240/year (or $20/month)</p>
      <p>This plan includes priority support and advanced customization features to enhance your experience.</p>
    </div>
  );
};

export default Summary;
