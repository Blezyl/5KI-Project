// File: SuperAdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const SuperAdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Super Admin dashboard.</p>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
