import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [role, setRole] = useState('student');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
      );
      return;
    }

    // Call the onLogin function to notify the parent component about the login
    onLogin(role);

    // Redirect the user to their respective dashboard
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'faculty') {
      navigate('/faculty');
    } else {
      navigate('/student');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f7f9fc',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          width: '400px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </div>
          {errorMessage && (
            <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: '#1E3A8A',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          Don’t have an account?{' '}
          <a href="/signup" style={{ color: '#1E3A8A' }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
