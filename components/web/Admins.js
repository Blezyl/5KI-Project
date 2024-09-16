// File: AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary

const Admins = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to Admins</h1>
      </div>
    </div>
  );
};

export default Admins;
