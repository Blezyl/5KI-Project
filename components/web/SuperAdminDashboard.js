// File: SuperAdminDashboard.js
import React from 'react';
import SuperAdSidebar from './SuperAdSidebar';

const SuperAdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <SuperAdSidebar />
      
      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Super Admin dashboard.</p>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
