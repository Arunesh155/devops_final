import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Checkbox to toggle admin login
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }, isAdmin);
      const { token } = res.data;

      // Save token in localStorage
      localStorage.setItem('token', token);

      // Decode role from JWT payload
      const payload = JSON.parse(atob(token.split('.')[1]));
      const role = payload.admin?.role || payload.user?.role;

      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'user') {
        navigate('/home');
      }
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <label>Login as Admin</label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
