import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this import is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const SuperAdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Make sure useAuth is correctly returning login

  const handleLogin = () => {
    if (email === 'superadmin' && password === 'superadminpass') {
      login('superadmin'); // Set user role to superadmin
      navigate('/registrations');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light p-4">
      <h1 className="mb-4 text-dark">Super Admin Login Page</h1>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-4"
        />
        <button onClick={handleLogin} className="btn btn-primary w-100 mb-2">
          Login
        </button>
        <button onClick={() => navigate('/')} className="btn btn-secondary w-100">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuperAdminLoginPage;
