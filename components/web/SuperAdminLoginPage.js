import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this import is correct

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
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Super Admin Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default SuperAdminLoginPage;
