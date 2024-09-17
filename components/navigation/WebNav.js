// File: WebNav.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../web/AuthContext'; // Import AuthProvider
import WebHome from '../web/WebHome';
import SuperAdminLoginPage from '../web/SuperAdminLoginPage';
import AdminLoginPage from '../web/AdminLoginPage';
import RegistrationRequests from '../web/Registrations/RegistrationRequets'; 
import Member from "../web/Members/Member";
import LoansRequests from "../web/Loans/LoansRequests";
import Payments from "../web/Payments/PaymentRequests";
import DepositRequests from "../web/Deposits/DepositRequests";
import Withdrawals from "../web/Withdrawals/Withdrawal";
import Archive from "../web/Archives/Archive";
import Admins from "../web/Admins";


const WebNav = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="/superadminlogin" element={<SuperAdminLoginPage />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/registrations" element={<RegistrationRequests />} /> 
        <Route path="/members" element={<Member />} />
        <Route path="/loans" element={<LoansRequests />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/deposits" element={<DepositRequests />} />
        <Route path="/withdrawals" element={<Withdrawals />} />
        <Route path="/archives" element={<Archive />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default WebNav;
