import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for current path
import { useAuth } from './AuthContext'; // Import AuthContext
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  const { userRole, logout } = useAuth(); // Get userRole from context

  const handleLogout = () => {
    logout(); // Clear user role
    navigate('/'); // Redirect to homepage
  };

  // Check if the current path matches the button route
  const isActive = (path) => location.pathname === path;

  return (
    <View style={styles.sidebar}>
      <ScrollView>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{userRole ? userRole.toUpperCase() : 'GUEST'}</Text>
        </View>

        {/* Sidebar Buttons */}
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/registrations') && styles.activeButton]}
          onPress={() => navigate('/registrations')}
        >
          <Text style={styles.sidebarButtonText}>Registrations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/members') && styles.activeButton]}
          onPress={() => navigate('/members')}
        >
          <Text style={styles.sidebarButtonText}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/loans') && styles.activeButton]}
          onPress={() => navigate('/loans')}
        >
          <Text style={styles.sidebarButtonText}>Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/payments') && styles.activeButton]}
          onPress={() => navigate('/payments')}
        >
          <Text style={styles.sidebarButtonText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/deposits') && styles.activeButton]}
          onPress={() => navigate('/deposits')}
        >
          <Text style={styles.sidebarButtonText}>Deposits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/withdrawals') && styles.activeButton]}
          onPress={() => navigate('/withdrawals')}
        >
          <Text style={styles.sidebarButtonText}>Withdrawals</Text>
        </TouchableOpacity>

        {/* Conditionally render the "Admins" button if the user is a super admin */}
        {userRole === 'superadmin' && (
          <TouchableOpacity
            style={[styles.sidebarButton, isActive('/admins') && styles.activeButton]}
            onPress={() => navigate('/admins')}
          >
            <Text style={styles.sidebarButtonText}>Admins</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.sidebarButton, isActive('/archives') && styles.activeButton]}
          onPress={() => navigate('/archives')}
        >
          <Text style={styles.sidebarButtonText}>Archive</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = {
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 250,
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRight: '1px solid #ddd',
    zIndex: 1,
  },
  greetingContainer: {
    padding: 20,
    borderBottom: '1px solid #ddd',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  sidebarButton: {
    padding: 15,
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s ease', // Add transition for hover effect
  },
  activeButton: {
    backgroundColor: '#e9ecef', // Color for active button
  },
  sidebarButtonText: {
    fontSize: 16,
    color: '#343a40',
  },
  logoutButton: {
    padding: 15,
    borderBottom: '1px solid #ddd',
    backgroundColor: '#dc3545',
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
};

export default Sidebar;
