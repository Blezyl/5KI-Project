import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { InfoCircle, CheckCircle, XCircle } from 'react-bootstrap-icons';
import axios from 'axios';  // Install axios if not installed
import Sidebar from './Sidebar'; // Adjust the path if necessary

const Registrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch registrations data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.254.113:3000/registrations'); // Replace with your backend URL
        console.log('API Response:', response.data); // Log the response
        if (Array.isArray(response.data)) {
          setRegistrations(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };
    
    fetchData();
  }, []);

  // Modal show/close
  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Fixed Sidebar */}
        <div className="col-2 p-0">
          <Sidebar style={{ position: 'fixed', top: 0, left: 0, width: '200px', height: '100vh' }} />
        </div>

        {/* Main content */}
        <div className="col-10 offset-2" style={{ padding: '20px' }}>
          <h1>Registrations</h1>

          {/* Display the registrations in a table */}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Email</th>
                <th>Valid ID</th>
                <th>More Info</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{`${user.firstName} ${user.middleName ? user.middleName + ' ' : ''}${user.lastName}`}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.validId}</td>
                    <td>
                      <Button variant="info" onClick={() => handleShowModal(user)}>
                        <InfoCircle /> {/* Info icon */}
                      </Button>
                    </td>
                    <td>
                      <Button variant="success" className="me-2">
                        <CheckCircle /> {/* Check icon */}
                      </Button>
                      <Button variant="danger">
                        <XCircle /> {/* Wrong icon */}
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No registrations found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Modal for user details */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedUser && (
                <div>
                  <p>
                    <strong>Full Name:</strong> {`${selectedUser.firstName} ${selectedUser.middleName ? selectedUser.middleName + ' ' : ''}${selectedUser.lastName}`}
                  </p>
                  <p><strong>Age:</strong> {selectedUser.age}</p>
                  <p><strong>Gender:</strong> {selectedUser.gender}</p>
                  <p><strong>Date of Birth:</strong> {new Date(selectedUser.dateOfBirth).toLocaleDateString()}</p>
                  <p><strong>Place of Birth:</strong> {selectedUser.gender}</p>
                  <p><strong>Address:</strong> {selectedUser.address}</p>
                  <p><strong>Civil Status:</strong> {selectedUser.gender}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Phone Number:</strong> {selectedUser.gender}</p>
                  <p><strong>Valid ID:</strong> {selectedUser.validId}</p>
                  <p><strong>Selfie:</strong> {selectedUser.status}</p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
