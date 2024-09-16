import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebHome = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page) => {
    if (page === 'superadminlogin') {
      navigate('/superadminlogin');
    } else if (page === 'adminlogin') {
      navigate('/adminlogin');
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
      <h1>Web Home Page</h1>
      <button onClick={() => handleButtonClick('superadminlogin')}>Super Admin</button>
      <br />
      <button onClick={() => handleButtonClick('adminlogin')}>Admin</button>
      <br />
    </div>
  );
};

export default WebHome;
