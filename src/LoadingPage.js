import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Finding the best courses for you...</p>
    </div>
  );
};

export default LoadingPage;