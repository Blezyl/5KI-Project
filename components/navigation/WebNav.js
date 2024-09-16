// File: WebNav.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebHome from '../web/WebHome';
import SuperAdminLoginPage from '../web/SuperAdminLoginPage';
import AdminLoginPage from '../web/AdminLoginPage';
import SuperAdminDashboard from '../web/SuperAdminDashboard';
import AdminDashboard from '../web/AdminDashboard';
import Registrations from '../web/Registrations'; 
import Members from "../web/Members";
import Loans from "../web/Loans";
import Payments from "../web/Payments";
import Deposits from "../web/Deposits";
import Withdrawals from "../web/Withdrawals";
import Archives from "../web/Archives";
import Admins from "../web/Admins";


const WebNav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="/superadminlogin" element={<SuperAdminLoginPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/superadmindashboard" element={<SuperAdminDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/registrations" element={<Registrations />} /> 
        <Route path="/members" element={<Members />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/withdrawals" element={<Withdrawals />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </Router>
  );
};

export default WebNav;
