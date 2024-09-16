// File: AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin dashboard.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
