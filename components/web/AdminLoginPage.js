// File: AdminLoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login logic (Replace with real authentication)
    if (email === 'admin@gmail.com' && password === 'admin') {
      // Navigate to admin dashboard on successful login
      navigate('/admindashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Admin Login Page</h1>
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

export default AdminLoginPage;
