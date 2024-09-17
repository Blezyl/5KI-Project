// File: AdminDashboard.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import { Button, Form, Table, Modal } from 'react-bootstrap';

const Admins = () => {
  const [showForm, setShowForm] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
  });

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/add-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const newAdmin = await response.json();
        setAdmins((prev) => [
            ...prev,
            newAdmin,
        ]);
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
        });
        handleClose();
    } catch (error) {
        console.error('Error:', error);
    }
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
          <h1>Welcome to Admins</h1>
          
          {/* Button to open form */}
          <div className="d-flex justify-content-start mb-3">
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ position: 'relative' }}
            >
              Add Admin
            </Button>
          </div>

          {/* Modal form */}
          <Modal show={showForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMiddleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Admins Table */}
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {admins.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No admins
                  </td>
                </tr>
              ) : (
                admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>{admin.id}</td>
                    <td>{`${admin.firstName} ${admin.middleName} ${admin.lastName}`}</td>
                    <td>{admin.gender}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Admins;
