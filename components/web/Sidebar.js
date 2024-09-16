import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here, like clearing user data or tokens
    navigate('/'); // Redirect to homepage
  };

  return (
    <View style={styles.sidebar}>
      <ScrollView>
        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>ADMIN</Text>
        </View>

        {/* Sidebar Buttons */}
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/registrations')}>
          <Text style={styles.sidebarButtonText}>Registrations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/members')}>
          <Text style={styles.sidebarButtonText}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/loans')}>
          <Text style={styles.sidebarButtonText}>Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/payments')}>
          <Text style={styles.sidebarButtonText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/deposits')}>
          <Text style={styles.sidebarButtonText}>Deposits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/withdrawals')}>
          <Text style={styles.sidebarButtonText}>Withdrawals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/admins')}>
              <Text style={styles.sidebarButtonText}>Admins</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={() => navigate('/')}>
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
