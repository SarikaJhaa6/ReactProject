import React from 'react';
import { PuffLoader } from 'react-spinners';

const LoadingSpinner: React.FC = () => (
  <div className="loading-overlay">
    <PuffLoader color="#0e07ce" size={60} />
  </div>
);

export default LoadingSpinner;