import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Logged in successfully:', { email, password });
      // Handle the login logic here
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Login;
