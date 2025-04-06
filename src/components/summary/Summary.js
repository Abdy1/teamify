import React from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation to get the query parameters
import styles from './Summary.module.css';

const Summary = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse the query params
  const selectedPlan = queryParams.get('plan'); // Get the 'plan' query param

  // Function to get details based on the selected plan
  const getPlanDetails = (plan) => {
    switch (plan) {
      case 'standard':
        return {
          name: 'Standard',
          description: 'The basic plan suitable for individuals and small teams.',
          price: '$10/month or $120/year',
          additionalInfo: 'This plan includes essential features for individuals and teams just starting out.',
        };
      case 'premium':
        return {
          name: 'Premium',
          description: 'A popular plan for growing teams with additional features.',
          price: '$20/month or $240/year',
          additionalInfo: 'This plan includes priority support and advanced customization features to enhance your experience.',
        };
      case 'enterprise':
        return {
          name: 'Enterprise',
          description: 'Advanced tools and priority support for large teams.',
          price: '$40/month or $480/year',
          additionalInfo: 'Enterprise-grade features for large teams with priority support and advanced tools.',
        };
      default:
        return {
          name: 'Unknown Plan',
          description: 'No plan selected.',
          price: 'N/A',
          additionalInfo: 'Please select a valid plan.',
        };
    }
  };

  const planDetails = getPlanDetails(selectedPlan);

  return (
    <div className={styles.fullWidthSummary}>
      <h3>{planDetails.name} Plan</h3>
      <p>{planDetails.description}</p>
      <p><strong>Price:</strong> {planDetails.price}</p>
      <p>{planDetails.additionalInfo}</p>
    </div>
  );
};

export default Summary;
