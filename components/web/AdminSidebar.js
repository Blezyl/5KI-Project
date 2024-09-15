
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <View style={{ flex: 1 }}>
      {/* Burger Icon to Toggle Sidebar */}
      <TouchableOpacity onPress={toggleSidebar} style={{ padding: 10 }}>
        <Ionicons name="menu" size={32} />
      </TouchableOpacity>

      {/* Sidebar */}
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <ScrollView>
            {/* Greeting */}
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>ADMIN</Text>
            </View>

            {/* Sidebar Buttons */}
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Registrations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Members</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Loans</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Deposits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Withdrawals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarButton}>
              <Text style={styles.sidebarButtonText}>Archive</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
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
    zIndex: 1, // Lower zIndex so burger can be above
  },
  burgerIcon: {
    position: 'fixed', // Or 'absolute' depending on your layout
    top: 20,
    left: 20,
    zIndex: 2, // Higher zIndex to ensure it's on top
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
};


export default Sidebar;
