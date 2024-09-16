// File: AdminDashboard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Adjust the path if necessary

const Deposits = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Fixed Sidebar */}
        <div className="col-2 p-0">
          <Sidebar style={{ position: 'fixed', top: 0, left: 0, width: '200px', height: '100vh' }} />
        </div>

        {/* Main content */}
        <div className="col-10 offset-2" style={{ padding: '20px' }}>
          <h1>Welcome to deposits</h1>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
