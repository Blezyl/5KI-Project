import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="mb-4 text-dark">Welcome to 5KI Financial Services</h1>
      <button
        onClick={() => handleButtonClick('superadminlogin')}
        className="btn btn-primary mb-3"
      >
        Super Admin
      </button>
      <button
        onClick={() => handleButtonClick('adminlogin')}
        className="btn btn-success"
      >
        Admin
      </button>
    </div>
  );
};

export default WebHome;
