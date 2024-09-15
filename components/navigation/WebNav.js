// File: WebNav.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebHome from '../web/WebHome';
import SuperAdminLoginPage from '../web/SuperAdminLoginPage';
import AdminLoginPage from '../web/AdminLoginPage';
import SuperAdminDashboard from '../web/SuperAdminDashboard';
import AdminDashboard from '../web/AdminDashboard';

const WebNav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="/superadminlogin" element={<SuperAdminLoginPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default WebNav;
