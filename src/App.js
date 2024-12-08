import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/Authentication/LoginForm';
import SignUpForm from './components/Authentication/SignUpForm';
import AdminDashboard from './components/Admin/Dashboard';
import StudentDashboard from './components/Student/Dashboard';
import FacultyDashboard from './components/Faculty/Dashboard';
import StudentLoginForm from './components/Student/StudentLoginForm'; // Importing the student login form
import FeedbackForm from './components/Student/StudentFeedbackForm'; // Importing the student feedback form
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
//import { useNavigate } from 'react-router-dom';

// ProtectedRoute Component
const ProtectedRoute = ({ children, isAuthenticated, role }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role === 'admin' && window.location.pathname !== '/admin') {
    return <Navigate to="/admin" />;
  }
  if (role === 'student' && window.location.pathname !== '/student') {
    return <Navigate to="/student" />;
  }
  if (role === 'faculty' && window.location.pathname !== '/faculty') {
    return <Navigate to="/faculty" />;
  }

  return children;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const [studentData, setStudentData] = useState(null);  // For student login data

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole('');
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Routes for login, signup, and student login */}
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us */}
        <Route
          path="/student-login"
          element={<StudentLoginForm setStudentData={setStudentData} />} // Route to student login form
        />

        {/* Routes for admin, faculty, and student dashboards */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} role={role}>
              <AdminDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} role={role}>
              <StudentDashboard studentData={studentData} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faculty"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} role={role}>
              <FacultyDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Student Feedback Form Route */}
        <Route
          path="/student/feedback"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} role={role}>
              <FeedbackForm />
            </ProtectedRoute>
          }
        />

        {/* Default and catch-all route */}
        <Route path="/" element={<div className="empty-page">Welcome to Feedback Management System</div>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
