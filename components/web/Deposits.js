// File: AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary

const Deposits = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to Deposits</h1>
      </div>
    </div>
  );
};

export default Deposits;
