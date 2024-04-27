import React, { useState } from 'react';
import './Login.css'; // Import Login.css for styling

const Login = () => {
  // State variables to store user input and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // If validation passes, submit the form (you can handle login logic here)
    console.log('Form submitted:', { email, password });
    // Clear any previous errors
    setError('');
    // Clear input fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
