// File: AdminDashboard.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import Sidebar from '../Sidebar'; // Adjust the path if necessary

const Payments = () => {
  const [payments, setPayments] = useState([]);


  // Fetch registrations data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.254.113:3000/payments'); // Replace with your backend URL
        console.log('API Response:', response.data); // Log the response
        if (Array.isArray(response.data)) {
          setDeposits(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    
    fetchData();
  }, []);


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Fixed Sidebar */}
        <div className="col-2 p-0">
          <Sidebar style={{ position: 'fixed', top: 0, left: 0, width: '200px', height: '100vh' }} />
        </div>

        {/* Main content */}
        <div className="col-10 offset-2" style={{ padding: '20px' }}>
          <h1>Welcome to Payments</h1>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Option</th>
                <th>Account Number</th>
                <th>Amount to be Paid</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <tr key={payment._id}>
                    <td>{payment.paymentOption}</td>
                    <td>{payment.accountNumber}</td>
                    <td>{payment.amountToBePaid}</td>
                    <td>{payment.paymentDate}</td>
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
                  <td colSpan="5" className="text-center">No payments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
